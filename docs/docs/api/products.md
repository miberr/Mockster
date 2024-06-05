---
sidebar_label: "🧸 Products"
description: "Generate products data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🧸 Products

:::info Power Automate connector in preview
Power Automate connector is currently in preview. It has all the functionality. Preview flag will be removed in some time as Mockster finds its users.
:::

## Description

Generate product related data. Returns an array of properties, by default ten. Some properties may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get product mockdata`.

<PAAImage src="/img/products-action.jpg" alt="Get product mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/products
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "department": "Computers",
        "isbn": "978-0-911547-60-3",
        "price": 606,
        "product": "Salad",
        "productAdjective": "Elegant",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productMaterial": "Granite",
        "productName": "Oriental Frozen Cheese"
    }
]
```

### Department

|JSON|Power Automate|
|:---------|:---------|
`department`|`Department`

Returns the department of the product. For example: `Computers`.

Return datatype: **string**

### ISBN

|JSON|Power Automate|
|:---------|:---------|
`isbn`|`ISBN`

Returns the ISBN of the product. For example: `978-0-911547-60-3`.

Return datatype: **string**

### Price

|JSON|Power Automate|
|:---------|:---------|
`price`|`Price`

Returns the price of the product. For example: `606`.

Return datatype: **number**

### Product

|JSON|Power Automate|
|:---------|:---------|
`product`|`Short product name`

Returns the type of the product. For example: `Salad`.

Return datatype: **string**

### Product Adjective

|JSON|Power Automate|
|:---------|:---------|
`productAdjective`|`Product Adjective`

Returns an adjective describing the product. For example: `Elegant`.

Return datatype: **string**

### Product Description

|JSON|Power Automate|
|:---------|:---------|
`productDescription`|`Product Description`

Returns a description of the product. For example: `Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles`.

Return datatype: **string**

### Product Material

|JSON|Power Automate|
|:---------|:---------|
`productMaterial`|`Product Material`

Returns the material of the product. For example: `Granite`.

Return datatype: **string**

### Product Name

|JSON|Power Automate|
|:---------|:---------|
`productName`|`Product Name`

Returns the name of the product. For example: `Oriental Frozen Cheese`.

Return datatype: **string**

## Related endpoints

Add some color to your product data with the [🌈 Colors](./colors) endpoint.

Create manufacturers for your products with the [🏢 Companies](./companies) endpoint.