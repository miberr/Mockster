---
sidebar_label: "🌈 Colors"
description: "Generate color related data. Includes color values in different formats as well as human readable value. Returns an array of colors, by default ten. Some values may be localized."
---

# 🌈 Colors

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate color related data. Includes color values in different formats as well as human readable value. Returns an array of colors, by default ten. Some values may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results | null |

## Request

```http title="HTTP"
GET https://api.mockster.dev/api/v1/colors
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "cmyk": [
            0.63,
            0.75,
            0.48,
            0.42
        ],
        "colorByCSSColorSpace": [
            0.1741,
            0.4743,
            0.5379
        ],
        "cssSupportedFunction": "lch",
        "cssSupportedSpace": "rec2020",
        "hsl": [
            297,
            0.93,
            0.65
        ],
        "humanReadableColor": "turquoise",
        "hwb": [
            124,
            0.03,
            0.38
        ],
        "lab": [
            0.448609,
            14.677,
            -32.1637
        ],
        "lch": [
            0.228977,
            188.1,
            33.2
        ],
        "rgb": "#be7fcc",
        "colorSpace": "CIEUVW"
    }
]
```

### CMYK

|JSON|Power Automate|
|:---------|:---------|
`cmyk`|`CMYK`

Returns a random CMYK color decimal values. For example:

```jsx title="JSON"
[
    0.63,
    0.75,
    0.48,
    0.42
]
```

Return datatype: **array**

### Color By CSS Color Space

|JSON|Power Automate|
|:---------|:---------|
`colorByCSSColorSpace`|`Color By CSS Color Space`

Returns a random CSS color decimal values. For example: 

```jsx title="JSON"
[
    0.1741,
    0.4743,
    0.5379
]
```

Return datatype: **array**

### CSS Supported Function

|JSON|Power Automate|
|:---------|:---------|
`cssSupportedFunction`|`CSS Supported Function`

Returns a random CSS supported color function name. Options are: `cmyk`, `color`, `hsl`, `hsla`, `hwb`, `lab`, `lch`, `rgb` or `rgba`. For example: `lch`.

Return datatype: **string**

### CSS Supported Space

|JSON|Power Automate|
|:---------|:---------|
`cssSupportedSpace`|`CSS Supported Space`

Returns a random CSS supported color space name. Options are: `a98-rgb`, `display-p3`, `prophoto-rgb`, `rec2020`, `sRGB`. For example: `rec2020`.

Return datatype: **string**

### HSL

|JSON|Power Automate|
|:---------|:---------|
`hsl`|`HSL`

Returns a random hsl color decimal values. For example: 

```jsx title="JSON"
[
    297,
    0.93,
    0.65
]
```

Return datatype: **array**

### Human

|JSON|Power Automate|
|:---------|:---------|
`humanReadableColor`|`Human readable color`

Returns a random human readable color name. For example `turquoise`.

Return datatype: **string**

### HWB

|JSON|Power Automate|
|:---------|:---------|
`hwb`|`HWB`

Returns a random hwb color decimal values. For example: 

```jsx title="JSON"
[
    124,
    0.03,
    0.38
]
```

Return datatype: **array**

### LAB

|JSON|Power Automate|
|:---------|:---------|
`lab`|`LAB`

Returns a random lab color decimal values. For example: 

```jsx title="JSON"
[
    0.448609,
    14.677,
    -32.1637
]
```

Return datatype: **array**

### LCH

|JSON|Power Automate|
|:---------|:---------|
`lch`|`LCH`

Returns a random lch color decimal values. For example: 

```jsx title="JSON"
[
    0.228977,
    188.1,
    33.2
]
```

Return datatype: **array**

### RGB

|JSON|Power Automate|
|:---------|:---------|
`rgb`|`RGB`

Returns a random RGB color in hex format. For example: `#be7fcc`.

Return datatype: **string**

### Color space

|JSON|Power Automate|
|:---------|:---------|
`colorSpace`|`Color space`

Returns a random color space name. For example: `CIEUVW`.

Return datatype: **string**