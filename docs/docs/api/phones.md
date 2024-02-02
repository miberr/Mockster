---
sidebar_label: "📱 Phones"
description: "Generate phone nuber and IMEI."
---

# 📱 Phones

Generate phone nuber and IMEI. Returns an array of properties, by default ten. Phone number may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

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
        "number": "1-603-414-6600"
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

Returns the phone number. For example: `1-603-414-6600`.

Return datatype: **string**