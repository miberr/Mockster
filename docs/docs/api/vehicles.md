---
sidebar_label: "🏎️ Vehicles"
description: "Generate different kinds of vehicles."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🏎️ Vehicles

:::info Power Automate connector in preview
Power Automate connector is currently in preview. It has all the functionality. Preview flag will be removed in some time as Mockster finds its users.
:::

## Description

Generate different kinds of vehicles and related properties. Returns an array of properties, by default ten. Some of the data may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get vehicle mockdata`.

<PAAImage src="/img/vehicles-action.jpg" alt="Get vehicle mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/vehicles
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "bicycle": "Track/Fixed-Gear Bicycle",
        "color": "turquoise",
        "fuel": "Electric",
        "manufacturer": "Nissan",
        "model": "Charger",
        "type": "Extended Cab Pickup",
        "vehicle": "Toyota Grand Caravan",
        "vin": "5Z4BWRAU40BP99482",
        "vrm": "ZJ14CUT"
    }
]
```

### Bicycle

|JSON|Power Automate|
|:---------|:---------|
`bicycle`|`Bicycle`

Returns the type of the bicycle. For example: `Track/Fixed-Gear Bicycle`.

Return datatype: **string**

### Color

|JSON|Power Automate|
|:---------|:---------|
`color`|`Color`

Returns the color of the vehicle. For example: `turquoise`.

Return datatype: **string**

### Fuel

|JSON|Power Automate|
|:---------|:---------|
`fuel`|`Fuel`

Returns the type of fuel the vehicle uses. For example: `Electric`.

Return datatype: **string**

### Manufacturer

|JSON|Power Automate|
|:---------|:---------|
`manufacturer`|`Manufacturer`

Returns the manufacturer of the vehicle. For example: `Nissan`.

Return datatype: **string**

### Model

|JSON|Power Automate|
|:---------|:---------|
`model`|`Model`

Returns the model of the vehicle. For example: `Charger`.

Return datatype: **string**

### Type

|JSON|Power Automate|
|:---------|:---------|
`type`|`Type`

Returns the type of the vehicle. For example: `Extended Cab Pickup`.

Return datatype: **string**

### Vehicle

|JSON|Power Automate|
|:---------|:---------|
`vehicle`|`Vehicle`

Returns the name of the vehicle. For example: `Toyota Grand Caravan`.

Return datatype: **string**

### VIN

|JSON|Power Automate|
|:---------|:---------|
`vin`|`VIN`

Returns the Vehicle Identification Number. For example: `5Z4BWRAU40BP99482`.

Return datatype: **string**

### VRM

|JSON|Power Automate|
|:---------|:---------|
`vrm`|`VRM`

Returns the Vehicle Registration Mark. For example: `ZJ14CUT`.

Return datatype: **string**