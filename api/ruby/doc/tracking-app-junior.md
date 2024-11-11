<p align="center"><a href="https://additive.eu" target="_blank"><img src="https://additive-trial-day.s3.eu-central-1.amazonaws.com/logo.png" width="400"></a></p>


# 03 Tracking App


We want you to implement a URL-Tracking service in a ruby framework of your choice.

The service should expose a single HTTP endpoint, accept a URL as query param and redirect to the given URL. This tracking process should bring as little overhead to the user experience as possible.

### Data to Track:

- Date and time
- IP-Address
- Location
    - Use a library or external service to get the location by the ip-address
- OS
- Device
- Referrer
- URL
- Language

The collected data should be persisted on a storage of your choice (Database, Filesystem, etc..)

### Success criteria

The code should be fully functional and push your code to a new public repository on GitHub.

### Bonus
Implement which and as many of the bonus points you feel comfortable with.
- Extend/Replace the functionality with an url-shortener service
- Store the data asynchronous and redirect immediately
- Create a dashboard with insights/statistics per URL
- Deploy your App to Heroku and share the link with us
