---
sidebar_label: "🔢 Numbers"
description: "Generate number data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🔢 Numbers

:::danger Power Automate connector rolling out
Power Automate connector is currently rolling out. The connector might be in your environment already. If not, please wait for a couple of weeks or see updates on this site.
:::

## Description

Generate different kinds of numbers. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get numeric mockdata`.

<PAAImage src="/img/numbers-action.jpg" alt="Get numeric mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/numbers
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "binary": "0",
        "float": 0.5515858614817262,
        "hex": "e",
        "int": 8414578299895808,
        "octal": "5"
    }
]
```

### Binary

|JSON|Power Automate|
|:---------|:---------|
`binary`|`Binary`

Returns a binary number. For example: `0`.

Return datatype: **string**

### Float

|JSON|Power Automate|
|:---------|:---------|
`float`|`Float`

Returns a floating point number. For example: `0.5515858614817262`.

Return datatype: **number**

### Hexadecimal

|JSON|Power Automate|
|:---------|:---------|
`hex`|`Hexadecimal`

Returns a hexadecimal number. For example: `e`.

Return datatype: **string**

### Integer

|JSON|Power Automate|
|:---------|:---------|
`int`|`Integer`

Returns an integer number. For example: `8414578299895808`.

Return datatype: **number**

### Octal

|JSON|Power Automate|
|:---------|:---------|
`octal`|`Octal`

Returns an octal number. For example: `5`.

Return datatype: **string**

## Related endpoints

For finance related data, see [💶 Finances](./finances) endpoint.