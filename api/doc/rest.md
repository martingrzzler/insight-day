<p align="center"><a href="https://additive.eu" target="_blank"><img src="https://additive-trial-day.s3.eu-central-1.amazonaws.com/logo.png" width="400"></a></p>


# 01 REST Design


Your objective is to design a RESTful API for an offer entity and it's room prices.

This includes all relevant endpoints to create, update, read and delete all entities with their requests and responses defined in JSON.

Given the Hotel "Testhotel Post" with it's rooms:

- Double room
- Junior Suite
- King Suite

For every of the above rooms, an offer can define an individual price. An offer consist of 3 properties: `name`, `start_date` and `end_date`. A room can have multiple prices through multiple offers.

The offer "Easter 2021" from 2021-04-02 to 2021-04-07 for example defines a price of 180 Eur for the "Double room" and 230 Eur for the "Junior suite". It does not specify a price for the "King suite".

The offer "Winter 2021" from 2021-11-15 to 2021-11-21 has a price of 150 Eur for the "Double room".

With the REST API It should be possible to:

- retrieve all offers
- retrieve a single offer by an id
- create an offer with a name, start_date and end_date
- update the name, start_date and end_date of an offer
- delete an offer by id
- define and update the price for a room for a specific offer
- list all prices defined for a specific offer
- delete the price for a room in a single offer

Extend this document following the example. Push the changes to your fork at the end to complete your work.

## Example

**Request GET `/offers`**

Payload: This GET has no Payload

**Response**

Payload:

```json
{
	"offers": [
		{
			"id": 1,
			"name": "Easter 2021",
			"start_at": "2021-04-02",
			"end_at": "2021-04-07"
		},
		// ... more offers
	]
}
```
