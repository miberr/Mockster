---
sidebar_label: "📱 Phones"
description: "Generate phone data."
---

# 📱 Phones

Generate phones related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/phones
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "imei": "45-156714-750405-6",
        "number": "+2 458709819"
    }
]
```

### IMEI

|JSON|Power Automate|
|:---------|:---------|
`imei`|`IMEI`

Returns the IMEI number of the phone. For example: `45-156714-750405-6`.

Return datatype: **string**

### Number

|JSON|Power Automate|
|:---------|:---------|
`number`|`Number`

Returns the phone number. For example: `+2 458709819`.

Return datatype: **string**