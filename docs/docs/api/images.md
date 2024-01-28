---
sidebar_label: "🌆 Images"
description: "Generate word data."
---

# 🌆 Images

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

```http title="HTTP"
GET https://mockster.dev/api/v1/images
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
`name`|`Name`

Returns the name of the image file. For example: `random_1.jpg`.

Return datatype: **string**

### URL

|JSON|Power Automate|
|:---------|:---------|
`url`|`URL`

Returns the URL where the image is located. For example: `https://loremflickr.com/640/480/random?lock=2279108562124800`.

Return datatype: **string**