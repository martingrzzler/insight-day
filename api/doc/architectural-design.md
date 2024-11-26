<p align="center"><a href="https://additive.eu" target="_blank"><img src="https://additive-trial-day.s3.eu-central-1.amazonaws.com/logo.png" width="400"></a></p>

# Architectural Design

## Technical Design of Mailer Service

We have several apps that send emails, so it would make sense to centralize this task of sending emails to a separate app.

Write a technical design (including infrastructure, DB design and API design) how this mailer service is built and works.

It should handle the following tasks:

- Receiving sending requests from the apps via an API interface
- Sending emails
- Receiving tracking data (open, click, bounce, unsubscribe) from Mailjet
- Providing tracking data via API or webhooks

Extend this document. Push the changes to your fork at the end to complete your work.

# Solution

## API

Simple HTTP Rest API with the following endpoints.

adds a email send job to the internal queue implementation

```
/queue
```

returns a `job_id`

---

```
/status
```

receives the current status of the operation

- Mail Service -> queued, failed
- Mailjet -> processed, clicked, sent

---

this should be registered on Mailjet via https://api.mailjet.com/v3/REST/eventcallbackurl

/events

Mailjet sends events to this webhook and the handler updates the status of the `EmailSendJob`

## Schema

- internal queue for `EmailSendJobs`
- Redis, Postgres, AWS SQS
- Since we must also access the jobs via the `/status` endpoint although the job may not have been processed yet I'd go with an plain SQL DB like Postgres

`EmailSendJob`

- id
- status -> `queued` | `failed` | `Mailjet.status`
- `message_id` -> returned from mailjet after sent
- email data to send -> from, to, html_body, text_body, etc

## Internals

1. `/queue` adds a new job to the queue with status `queued`
2. a separate thread continuosly checks for jobs with `status = queued`
3. tries sending via Mailjet and updates the job accordingly
4. upon receiving events at `/events` from Mailjet the state is updated again
5. at any time a client of the Mail Service can access the current state via `/status`

## Considerations

- for consuming the queue we might use multiple threads and hence should use something like `SELECT FOR UPDATE` to retrieve a lock on the row
- if there are no emails threads can go to sleep and wake up via condition variables
- we should add an index on the `message_id` field returned from Mailjet since `/events` find a job by `message_id` rather than the id column
- if the service does not run in a private network we must add authorization, simplest would be an API key
