---
sidebar_label: "💻 Systems"
description: "Generate system data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 💻 Systems

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate system related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get system mockdata`.

<PAAImage src="/img/systems-action.jpg" alt="Get system mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/systems
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "commonFileExt": "m2v",
        "commonFileName": "amongst_vivaciously_populate.wav",
        "commonFileType": "image",
        "cron": "15 * * * ?",
        "directoryPath": "/usr/libexec",
        "fileExt": "pot",
        "fileName": "yummy_commercialise_despite.mid",
        "filePath": "/private/tmp/interrelate_hmph.tar",
        "fileType": "image",
        "mimeType": "image/gif",
        "networkInterface": "wlo6",
        "semver": "6.2.5"
    }
]
```

### Common File Extension

|JSON|Power Automate|
|:---------|:---------|
`commonFileExt`|`Common File Extension`

Returns a common file extension. For example: `m2v`.

Return datatype: **string**

### Common File Name

|JSON|Power Automate|
|:---------|:---------|
`commonFileName`|`Common File Name`

Returns a common file name. For example: `amongst_vivaciously_populate.wav`.

Return datatype: **string**

### Common File Type

|JSON|Power Automate|
|:---------|:---------|
`commonFileType`|`Common File Type`

Returns a common file type. For example: `image`.

Return datatype: **string**

### Cron

|JSON|Power Automate|
|:---------|:---------|
`cron`|`Cron`

Returns a cron expression. For example: `15 * * * ?`.

Return datatype: **string**

### Directory Path

|JSON|Power Automate|
|:---------|:---------|
`directoryPath`|`Directory Path`

Returns a directory path. For example: `/usr/libexec`.

Return datatype: **string**

### File Extension

|JSON|Power Automate|
|:---------|:---------|
`fileExt`|`File Extension`

Returns a file extension. For example: `pot`.

Return datatype: **string**

### File Name

|JSON|Power Automate|
|:---------|:---------|
`fileName`|`File Name`

Returns a file name. For example: `yummy_commercialise_despite.mid`.

Return datatype: **string**

### File Path

|JSON|Power Automate|
|:---------|:---------|
`filePath`|`File Path`

Returns a file path. For example: `/private/tmp/interrelate_hmph.tar`.

Return datatype: **string**

### File Type

|JSON|Power Automate|
|:---------|:---------|
`fileType`|`File Type`

Returns a file type. For example: `image`.

Return datatype: **string**

### Mime Type

|JSON|Power Automate|
|:---------|:---------|
`mimeType`|`Mime Type`

Returns a mime type. For example: `image/gif`.

Return datatype: **string**

### Network Interface

|JSON|Power Automate|
|:---------|:---------|
`networkInterface`|`Network Interface`

Returns a network interface. For example: `wlo6`.

Return datatype: **string**

### Semver

|JSON|Power Automate|
|:---------|:---------|
`semver`|`Semantic version`

Returns a semantic version number. For example: `6.2.5`.

Return datatype: **string**

## Related endpoints

Database related properties can be found at [💾 Databases](./databases) endpoint.