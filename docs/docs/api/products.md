---
sidebar_label: "🧸 Products"
description: "Generate products data."
---

# 🧸 Products

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
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
`product`|`Product`

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