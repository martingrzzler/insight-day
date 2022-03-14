# Ember subscriber application

### Introduction

In this challenge you should create a simple app using EmberJS framework. If you are unfamiliar with EmberJS, take some time to look at the official
[documentation](https://emberjs.com/learn/) before you jump into it.

### Setup the application

Find the folder `subscribers` in this repository and install the dependencies using `npm install`. Start the application using `ember serve`. The app will start on `http://localhost:4200`.

### The Application

The Subscribers-App is a simple app to manage newsletter subscriptions. The following link shows how the app should look like https://www.figma.com/file/PT1kRlJGjpFqttvaxjwV6L/Developer-Test-Assignment-for-Trial-Day---Javascript?node-id=9%3A772. On the main page of the app all existing subscribers are listed. All subscribers can be edited and deleted. New subscribers can be added through a form that opens in a dialog. Once a new subscriber is added, this subscriber is added to the list. A subscriber has the following properties:

- `email` - the email address of the subscriber
- `firstName` - the first name of the subscriber
- `lastName` - the last name of the subscriber
- `gender` - the gender of the subscriber, `m` for male or `f` for female
- `subscribed` - a boolean determining whether the person is subscribed or unsubscribed

All of the properties are required and may not be empty.

This app uses [EmberCLI Mirage](https://www.ember-cli-mirage.com/docs/getting-started/what-is-mirage) to fake an API. The following endpoints are already implemented:

- POST `https://subscribers.additive-apps.tech/subscribers`

  - Creates a new subscriber
  - Requires all properties of the new subscriber
  - Will return an error if at least one property is missing

- GET `https://subscribers.additive-apps.tech/subscribers`

  - Returns all existing subscribers
  - On page load 10 random subscribers are generated

- PUT `https://subscribers.additive-apps.tech/subscribers/:id`

  - Will update the data of the given subscriber
  - Requires only properties that changed, but also unchanged properties can be sent

- DELETE `https://subscribers.additive-apps.tech/subscribers/:id`
  - deletes a given subscriber

The data retrieved from the Mirage endpoints is only stored for the current session. Once the page is reloaded, the data is gone.

### The Challenge

A part of the app has already been implemented. The list shows a hardcoded set of subscribers. The connection to the Mirage API has not been implemented yet. You can choose on your own how to fetch the data from the Mirage API. EmberJS provides the tool [Ember Data](https://guides.emberjs.com/release/models/) (already installed through npm) which may be useful.

Next the form to add and edit a subscriber is missing. This form needs to be implemented on your own. The input fields should be validated and API errors should be handled accordingly.
Further the edit and delete actions on the list entries are missing and need to be added.
