<p align="center"><a href="https://additive.eu" target="_blank"><img src="https://additive-trial-day.s3.eu-central-1.amazonaws.com/logo.png" width="400"></a></p>


# 04 Tracking App


We want you to implement a URL-Tracking service in a PHP framework of your choice.

The service should expose a single HTTP endpoint, accept a URL as query param, persist the collected data and redirect to the given URL. This tracking process should bring as little overhead to the user experience as possible.

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

Deploy your App to Heroku and share the link with us
