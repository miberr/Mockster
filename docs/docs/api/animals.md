---
sidebar_label: "🐷 Animals"
description: "Generate different kinds of animal species. Returns an array of animal species, by default ten. All values may be localized."
---

# 🐷 Animals

## Description

Generate different kinds of animal species. Returns an array of animal species, by default ten. All values may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results | null |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/animals
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "bear": "Polar bear",
        "bird": "Eurasian Wigeon",
        "cat": "Birman",
        "cetacean": "Short-Beaked Common Dolphin",
        "cow": "Deep Red cattle",
        "crocodilia": "Philippine Crocodile",
        "dog": "Molossus of Epirus",
        "fish": "Indian mackerel",
        "horse": "Fleuve",
        "insect": "German yellowjacket",
        "lion": "Asiatic Lion",
        "rabbit": "Flemish Giant",
        "rodent": "Fukomys mechowii",
        "snake": "Barred wolf snake",
        "type": "dog"
    }
]
```

### Bear

|JSON|Power Automate|
|:---------|:---------|
`bear`|`Bear`

Returns a random breed of bear. For example: `Polar bear`.

Return datatype: **string**

### Bird

|JSON|Power Automate|
|:---------|:---------|
`bird`|`Bird`

Returns a random breed of bird. For example: `Eurasian Wigeon`.

Return datatype: **string**

### Cat

|JSON|Power Automate|
|:---------|:---------|
`cat`|`Cat`

Returns a random breed of cat. For example: `Birman`.

Return datatype: **string**

### Cetacean

|JSON|Power Automate|
|:---------|:---------|
`cetacean`|`Cetacean`

Returns a random breed of cetacean. For example: `Short-Beaked Common Dolphin`.

Return datatype: **string**

### Cow

|JSON|Power Automate|
|:---------|:---------|
`cow`|`Cow`

Returns a random breed of cow. For example: `Deep Red cattle`.

Return datatype: **string**

### Crocodilia

|JSON|Power Automate|
|:---------|:---------|
`crocodilia`|`Crocodilia`

Returns a random breed of crocodilia. For example: `Philippine Crocodile`.

Return datatype: **string**

### Crocodilia

|JSON|Power Automate|
|:---------|:---------|
`crocodilia`|`Crocodilia`

Returns a random breed of crocodilia. For example: `Philippine Crocodile`.

Return datatype: **string**

### Dog

|JSON|Power Automate|
|:---------|:---------|
`dog`|`Dog`

Returns a random breed of dog. For example: `Molossus of Epirus`.

Return datatype: **string**

### Fish

|JSON|Power Automate|
|:---------|:---------|
`fish`|`Fish`

Returns a random breed of fish. For example: `Indian mackerel`.

Return datatype: **string**

### Horse

|JSON|Power Automate|
|:---------|:---------|
`horse`|`Horse`

Returns a random breed of horse. For example: `Fleuve`.

Return datatype: **string**

### Insect

|JSON|Power Automate|
|:---------|:---------|
`insect`|`Insect`

Returns a random breed of insect. For example: `German yellowjacket`.

Return datatype: **string**

### Lion

|JSON|Power Automate|
|:---------|:---------|
`lion`|`Lion`

Returns a random breed of lion. For example: `Asiatic Lion`.

Return datatype: **string**

### Rabbit

|JSON|Power Automate|
|:---------|:---------|
`rabbit`|`Rabbit`

Returns a random breed of rabbit. For example: `Flemish Giant`.

Return datatype: **string**

### Rodent

|JSON|Power Automate|
|:---------|:---------|
`rodent`|`Rodent`

Returns a random breed of rodent. For example: `Rodent`.

Return datatype: **string**

### Snake

|JSON|Power Automate|
|:---------|:---------|
`snake`|`Snake`

Returns a random breed of snake. For example: `Barred wolf snake`.

Return datatype: **string**

### Type

|JSON|Power Automate|
|:---------|:---------|
`type`|`Type`

Returns a random type of animal. For example: `dog`.

Return datatype: **string**