---
sidebar_label: "🎶 Musics"
description: "Generate Lorem Ipsum data."
---

# 🎶 Musics

Generate musics related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/musics
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

Returns the genre of the music. For example: `Country`.

Return datatype: **string**

### Song Name

|JSON|Power Automate|
|:---------|:---------|
`songName`|`Song Name`

Returns the name of the song. For example: `Just Dance`.

Return datatype: **string**