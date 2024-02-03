---
sidebar_label: "👩🏻‍🔬 Science"
description: "Generate science data."
---

# 👩🏻‍🔬 Science

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate science related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/sciences
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