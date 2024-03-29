---
sidebar_label: "🎶 Musics"
description: "Generate Lorem Ipsum data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🎶 Musics

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate music related data. Returns an array of properties, by default ten. Some properties might be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get music mockdata`.

<PAAImage src="/img/musics-action.jpg" alt="Get music mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/musics
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "genre": "Country",
        "songName": "Just Dance"
    }
]
```

### Genre

|JSON|Power Automate|
|:---------|:---------|
`genre`|`Genre`

Returns random music genre. For example: `Country`.

Return datatype: **string**

### Song Name

|JSON|Power Automate|
|:---------|:---------|
`songName`|`Song Name`

Returns a randmo song name. For example: `Just Dance`.

Return datatype: **string**