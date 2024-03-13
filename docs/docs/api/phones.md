---
sidebar_label: "📱 Phones"
description: "Generate phone nuber and IMEI."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 📱 Phones

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate phone nuber and IMEI. Returns an array of properties, by default ten. Phone number may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get phone mockdata`.

<PAAImage src="/img/phones-action.jpg" alt="Get phone mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/phones
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
`number`|`Phone number`

Returns the phone number. For example: `1-603-414-6600`.

Return datatype: **string**