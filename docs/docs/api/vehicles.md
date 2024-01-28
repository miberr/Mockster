---
sidebar_label: "🏎️ Vehicles"
description: "Generate vehicle data."
---

# 🏎️ Vehicles

Generate phones related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/science
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