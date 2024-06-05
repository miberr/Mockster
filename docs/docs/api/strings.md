---
sidebar_label: "🔠 Strings"
description: "Generate random strings."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🔠 Strings

:::info Power Automate connector in preview
Power Automate connector is currently in preview. It has all the functionality. Preview flag will be removed in some time as Mockster finds its users.
:::

## Description

Generate random strings. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get string mockdata`.

<PAAImage src="/img/strings-action.jpg" alt="Get string mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/strings
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
     {
        "alpha": "C",
        "alphaNumeric": "X",
        "binary": "0b0",
        "hexadecimal": "0xa",
        "nanoid": "tooWOZFFJtCGUTLofxCia",
        "numeric": "6",
        "octal": "0o6",
        "sample": "G^XL?D'u|D",
        "symbol": "-",
        "uuid": "9b39132d-5157-42c4-bd5e-84f30c6d3692"
    }
]
```

### Alpha

|JSON|Power Automate|
|:---------|:---------|
`alpha`|`Alpha`

Returns an alphabetic character. For example: `C`.

Return datatype: **string**

### Alpha Numeric

|JSON|Power Automate|
|:---------|:---------|
`alphaNumeric`|`Alphanumeric`

Returns an alphanumeric character. For example: `X`.

Return datatype: **string**

### Binary

|JSON|Power Automate|
|:---------|:---------|
`binary`|`Binary`

Returns a binary number. For example: `0b0`.

Return datatype: **string**

### Hexadecimal

|JSON|Power Automate|
|:---------|:---------|
`hexadecimal`|`Hexadecimal`

Returns a hexadecimal number. For example: `0xa`.

Return datatype: **string**

### Nanoid

|JSON|Power Automate|
|:---------|:---------|
`nanoid`|`Nanoid`

Returns a nanoid. For example: `tooWOZFFJtCGUTLofxCia`.

Return datatype: **string**

### Numeric

|JSON|Power Automate|
|:---------|:---------|
`numeric`|`Numeric`

Returns a numeric character. For example: `6`.

Return datatype: **string**

### Octal

|JSON|Power Automate|
|:---------|:---------|
`octal`|`Octal`

Returns an octal number. For example: `0o6`.

Return datatype: **string**

### Sample

|JSON|Power Automate|
|:---------|:---------|
`sample`|`Sample`

Returns a sample string. For example: `G^XL?D'u|D`.

Return datatype: **string**

### Symbol

|JSON|Power Automate|
|:---------|:---------|
`symbol`|`Symbol`

Returns a symbol. For example: `-`.

Return datatype: **string**

### UUID

|JSON|Power Automate|
|:---------|:---------|
`uuid`|`UUID`

Returns a UUID. For example: `9b39132d-5157-42c4-bd5e-84f30c6d3692`.

Return datatype: **string**