---
sidebar_label: "🌆 Images"
description: "Generate word data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🌆 Images

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate real images for your data. You can also use query parameter for returning spesific categories of images with spesific height and width. Returns an array of image URLS and names, by default ten. 

Service is provided by https://loremflickr.com. 

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Category`| Available categories are: `abstract`, `animals`, `business`, `cats`, `city`, `fashion`, `food`, `nature`, `nightlife`, `people`, `sports`, `technics`, `transport` | null |
|`Count`| Count of objects returned | 10 |
|`Height`| Height of all returned images in pixels | 480 |
|`Width`| Widhts of all returned images in pixels | 640 |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get random images`.

<PAAImage src="/img/images-action.jpg" alt="Get image mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/images
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
   {
        "name": "random_1.jpg",
        "url": "https://loremflickr.com/640/480/random?lock=2279108562124800"
    }
]
```

### Name

|JSON|Power Automate|
|:---------|:---------|
`name`|`Image name`

Returns the name of the image file. For example: `random_1.jpg`.

Return datatype: **string**

### URL

|JSON|Power Automate|
|:---------|:---------|
`url`|`Image URL`

Returns the URL where the image is located. For example: `https://loremflickr.com/640/480/random?lock=2279108562124800`.

Return datatype: **string**