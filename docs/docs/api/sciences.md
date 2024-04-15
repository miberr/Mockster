---
sidebar_label: "👩🏻‍🔬 Sciences"
description: "Generate science data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 👩🏻‍🔬 Sciences

:::danger Power Automate connector rolling out
Power Automate connector is currently rolling out. The connector might be in your environment already. If not, please wait for a couple of weeks or see updates on this site.
:::

## Description

Generate science related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get science mockdata`.

<PAAImage src="/img/sciences-action.jpg" alt="Get science mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/sciences
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "chemicalElementSymbol": "Ga",
        "chemicalElementName": "Gallium",
        "chemicalElementAtomicNumber": 31,
        "unitName": "lux",
        "unitSymbol": "lx"
    }
]
```

### Chemical Element Symbol

|JSON|Power Automate|
|:---------|:---------|
`chemicalElementSymbol`|`Chemical Element Symbol`

Returns the symbol of the chemical element. For example: `Ga`.

Return datatype: **string**

### Chemical Element Name

|JSON|Power Automate|
|:---------|:---------|
`chemicalElementName`|`Chemical Element Name`

Returns the name of the chemical element. For example: `Gallium`.

Return datatype: **string**

### Chemical Element Atomic Number

|JSON|Power Automate|
|:---------|:---------|
`chemicalElementAtomicNumber`|`Chemical Element Atomic Number`

Returns the atomic number of the chemical element. For example: `31`.

Return datatype: **number**

### Unit Name

|JSON|Power Automate|
|:---------|:---------|
`unitName`|`Unit Name`

Returns the name of the unit. For example: `lux`.

Return datatype: **string**

### Unit Symbol

|JSON|Power Automate|
|:---------|:---------|
`unitSymbol`|`Unit Symbol`

Returns the symbol of the unit. For example: `lx`.

Return datatype: **string**