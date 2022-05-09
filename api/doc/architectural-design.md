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