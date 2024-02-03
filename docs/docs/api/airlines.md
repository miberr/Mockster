---
sidebar_label: "✈️ Airlines"
description: "Generate aviation related data. You can use this endpoint for creating realistic mock data for flights or tickets. Returns an array of airline related properties, by default ten."
---

# ✈️ Airlines

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate aviation related data. You can use this endpoint for creating realistic mock data for flights or tickets. Returns an array of airline related properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results | null |

## Request

```http title="HTTP"
GET https://api.mockster.dev/api/v1/airlines
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "aircraftType": "widebody",
        "airlineName": "Sky Airline",
        "airlineCode": "H2",
        "airplaneName": "De Havilland DH.104 Dove",
        "airplaneTypeCode": "DHD",
        "departureAirportName": "Indira Gandhi International Airport",
        "departureAirportCode": "DEL",
        "arrivalAirportName": "Perth Airport",
        "arrivalAirportCode": "PER",
        "flightNumber": "H20316",
        "recordLocator": "ACWNMD",
        "seat": "14A"
    }
]
```

### Aircraft Type

|JSON|Power Automate|
|:---------|:---------|
`aircraftType`|`Aircraft Type`

Returns a random aircraft type: `regional`, `narrowbody` or `widebody`.

Return datatype: **string**

### Airline Name

|JSON|Power Automate|
|:---------|:---------|
`airlineName`|`Airline Name`

Returns a random airline name. For example: `Sky Airline`.

Return datatype: **string**

### Airline Code

|JSON|Power Automate|
|:---------|:---------|
`airlineCode`|`Airline IATA Code`

Returns a random airline IATA code. For example: `H2`.

Return datatype: **string**


### Airplane Name

|JSON|Power Automate|
|:---------|:---------|
`airplaneName`|`Airplane Name`

Returns a random airplane name. For example: `De Havilland DH.104 Dove`.

Return datatype: **string**

### Airplane Type Code

|JSON|Power Automate|
|:---------|:---------|
`airplaneTypeCode`|`Airplane IATA Type Code`

Returns a random airplane name. For example: `DHD`.

Return datatype: **string**

### Departure Airport Name

|JSON|Power Automate|
|:---------|:---------|
`departureAirportName`|`Departure Airport Name`

Returns a random departure airport name. For example: `Indira Gandhi International Airport`.

Return datatype: **string**

### Departure Airport Code

|JSON|Power Automate|
|:---------|:---------|
`departureAirportCode`|`Departure Airport IATA Code`

Returns a random departure airport IATA code. For example: `DEL`.

Return datatype: **string**

### Arrival Airport Name

|JSON|Power Automate|
|:---------|:---------|
`arrivalAirportName`|`Arrival Airport Name`

Returns a random arrival airport name. For example: `Perth Airport`.

Return datatype: **string**

### Arrival Airport Code

|JSON|Power Automate|
|:---------|:---------|
`arrivalAirportCode`|`Arrival Airport IATA Code`

Returns a random arrival airport IATA code. For example: `PER`.

Return datatype: **string**

### Flight Number

|JSON|Power Automate|
|:---------|:---------|
`flightNumber`|`Flight Number`

Returns a random flight number. For example: `H20316`. Flight numbers are 1 to 4 numbers long. Leading zeros are added as well as airline IATA code to generate commonly used format.

Return datatype: **string**

### Record Locator

|JSON|Power Automate|
|:---------|:---------|
`recordLocator`|`Record Locator`

Returns a random record locator. For example: `ACWNMD`. Airlines commonly use this to identify reservations. Can be used as a booking reference, confirmation codes etc.    

Return datatype: **string**

### Seat

|JSON|Power Automate|
|:---------|:---------|
`seat`|`Seat`

Returns a random seat. For example: `14A`. Property uses generated Aircraft Type as input for consistensy.

Return datatype: **string**

## Related endpoints

To create realistic passenger data you can use the [🧍🏻 Persons](./persons) endpoint.
