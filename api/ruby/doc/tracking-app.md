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
- Unique Identifier
  - Generate a unique identifier to help link requests from the same user.

### Technical Requirements:
 - **Efficient Data Persistence** Use a scalable storage solution that ensures minimal impact on user experience during data logging. 
 - **High Performance**: Ensure the system can handle high traffic with minimal latency for redirects.
 - **Asynchronous Processing** Implement asynchronous data storage using a queuing system to offload tracking data storage from the request lifecycle.
 - **Error Handling** Implement robust error handling, logging any failures and gracefully continuing operations.
 - **Real-time Analytics** Implement a live view for the trackings with visual insights/statistics e.g. requests over time, unique visitors, geographic breakdown, visitor breakdowns, URL breakdowns
 - **Automated Tests** Write comprehensive tests covering edge cases, load, and performance testing.

### Success criteria

The code should be fully functional and push your code to a new public repository on GitHub.

### Bonus
Implement which and as many of the bonus points you feel comfortable with.
- Extend/Replace the functionality with an url-shortener service
- Security and Data Privacy: Implement rate limiting, ensure user data is anonymized as required, and comply with data privacy regulations
- Provide a docker compose file for your implementation
- Deploy your App and share the link with us