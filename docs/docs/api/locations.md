---
sidebar_label: "📍 Locations"
description: "Generate realistic location data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 📍 Locations

:::danger Power Automate connector rolling out
Power Automate connector is currently rolling out. The connector might be in your environment already. If not, please wait for a couple of weeks or see updates on this site.
:::

## Description

Generate location related data. Returns an array of properties, by default ten. Some attributes may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get location mockdata`.

<PAAImage src="/img/locations-action.jpg" alt="Get location mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/locations
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "buildingNumber": "79502",
        "cardinalDirection": "South",
        "city": "Devantestead",
        "country": "Faroe Islands",
        "countryCode": "PE",
        "county": "Avon",
        "direction": "Southeast",
        "latitude": -21.109,
        "longitude": -60.2472,
        "ordinalDirection": "Northwest",
        "secondaryAddress": "Suite 719",
        "state": "Kansas",
        "street": "Willow Street",
        "streetAddress": "7619 Damaris Junctions",
        "timeZone": "Pacific/Funafuti",
        "zipCode": "38467"
    }
]
```

### Building Number

|JSON|Power Automate|
|:---------|:---------|
`buildingNumber`|`Building Number`

Returns a ranbom building number. For example: `79502`.

Return datatype: **string**

### Cardinal Direction

|JSON|Power Automate|
|:---------|:---------|
`cardinalDirection`|`Cardinal Direction`

Returns a random cardinal direction. For example: `South`.

Return datatype: **string**

### City

|JSON|Power Automate|
|:---------|:---------|
`city`|`City`

Returns a random city name. For example: `Devantestead`.

Return datatype: **string**

### Country

|JSON|Power Automate|
|:---------|:---------|
`country`|`Country`

Returns a random country name. For example: `Faroe Islands`.

Return datatype: **string**

### Country Code

|JSON|Power Automate|
|:---------|:---------|
`countryCode`|`Country Code`

Returns a random country code. For example: `PE`.

Return datatype: **string**

### County

|JSON|Power Automate|
|:---------|:---------|
`county`|`County`

Returns a random county name. For example: `Avon`.

Return datatype: **string**

### Direction

|JSON|Power Automate|
|:---------|:---------|
`direction`|`Direction`

Returns a random direction. For example: `Southeast`.

Return datatype: **string**

### Latitude

|JSON|Power Automate|
|:---------|:---------|
`latitude`|`Latitude`

Returns a random latitude coordinate. For example: `-21.109`.

Return datatype: **number**

### Longitude

|JSON|Power Automate|
|:---------|:---------|
`longitude`|`Longitude`

Returns a random longitude coordinate. For example: `-60.2472`.

Return datatype: **number**

### Ordinal Direction

|JSON|Power Automate|
|:---------|:---------|
`ordinalDirection`|`Ordinal Direction`

Returns a random ordinal direction. For example: `Northwest`.

Return datatype: **string**

### Secondary Address

|JSON|Power Automate|
|:---------|:---------|
`secondaryAddress`|`Secondary Address`

Returns a random secondary address. For example: `Suite 719`.

Return datatype: **string**

### State

|JSON|Power Automate|
|:---------|:---------|
`state`|`State`

Returns a random state name. For example: `Kansas`.

Return datatype: **string**

### Street

|JSON|Power Automate|
|:---------|:---------|
`street`|`Street`

Returns a random street name. For example: `Willow Street`.

Return datatype: **string**

### Street Address

|JSON|Power Automate|
|:---------|:---------|
`streetAddress`|`Street Address`

Returns a ransom street address. For example: `7619 Damaris Junctions`.

Return datatype: **string**

### Time Zone

|JSON|Power Automate|
|:---------|:---------|
`timeZone`|`Time Zone`

Returns a tandom time zone. For example: `Pacific/Funafuti`.

Return datatype: **string**

### Zip Code

|JSON|Power Automate|
|:---------|:---------|
`zipCode`|`Zip Code`

Returns a random zip code. For example: `38467`.

Return datatype: **string**