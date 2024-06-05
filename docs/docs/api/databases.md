---
sidebar_label: "💾 Databases"
description: "Generate database related technical data, like columns or engines. Returns an array of properties, by default ten."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 💾 Databases

:::info Power Automate connector in preview
Power Automate connector is currently in preview. It has all the functionality. Preview flag will be removed in some time as Mockster finds its users.
:::

## Description

Generate database related technical data, like columns or engines. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get database mockdata`.

<PAAImage src="/img/databases-action.jpg" alt="Get database mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/databases
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "collation": "utf8_general_ci",
        "column": "id",
        "engine": "CSV",
        "mongodbObjectId": "cb5c4640fae4c9ad8f7ceeed",
        "type": "float"
    }
]
```

### Collation

|JSON|Power Automate|
|:---------|:---------|
`collation`|`Collation`

Returns a collation setting for a database. For example: `utf8_general_ci`.

Return datatype: **string**

### Column

|JSON|Power Automate|
|:---------|:---------|
`column`|`Column`

Returns a column name in a database. For example: `id`.

Return datatype: **string**

### Engine

|JSON|Power Automate|
|:---------|:---------|
`engine`|`Engine`

Returns a database engine type. For example: `CSV`.

Return datatype: **string**

### MongoDB Object ID

|JSON|Power Automate|
|:---------|:---------|
`mongodbObjectId`|`MongoDB Object ID`

Returns a MongoDB Object ID. For example: `cb5c4640fae4c9ad8f7ceeed`.

Return datatype: **string**

### Type

|JSON|Power Automate|
|:---------|:---------|
`type`|`Type`

Returns a data type for a database column. For example: `float`.

Return datatype: **string**

## Related endpoints

Other system properties can be found at [💻 Systems](./systems) endpoint.