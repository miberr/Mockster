---
sidebar_label: "🆒 Words"
description: "Generate random words."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🆒 Words

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Generate random words. Returns an array of properties, by default ten. Some values may be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get word mockdata`.

<PAAImage src="/img/words-action.jpg" alt="Get word mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/words
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
   {
        "adjective": "remote",
        "adverb": "loudly",
        "conjunction": "as",
        "interjection": "ha",
        "noun": "testing",
        "preposition": "between",
        "sample": "deliberately",
        "verb": "crease",
        "words": "aha insectarium exhausted"
    }
]
```
### Adjective

|JSON|Power Automate|
|:---------|:---------|
`adjective`|`Adjective`

Returns an adjective. For example: `remote`.

Return datatype: **string**

### Adverb

|JSON|Power Automate|
|:---------|:---------|
`adverb`|`Adverb`

Returns an adverb. For example: `loudly`.

Return datatype: **string**

### Conjunction

|JSON|Power Automate|
|:---------|:---------|
`conjunction`|`Conjunction`

Returns a conjunction. For example: `as`.

Return datatype: **string**

### Interjection

|JSON|Power Automate|
|:---------|:---------|
`interjection`|`Interjection`

Returns an interjection. For example: `ha`.

Return datatype: **string**

### Noun

|JSON|Power Automate|
|:---------|:---------|
`noun`|`Noun`

Returns a noun. For example: `testing`.

Return datatype: **string**

### Preposition

|JSON|Power Automate|
|:---------|:---------|
`preposition`|`Preposition`

Returns a preposition. For example: `between`.

Return datatype: **string**

### Sample

|JSON|Power Automate|
|:---------|:---------|
`sample`|`Sample`

Returns a sample string. For example: `deliberately`.

Return datatype: **string**

### Verb

|JSON|Power Automate|
|:---------|:---------|
`verb`|`Verb`

Returns a verb. For example: `crease`.

Return datatype: **string**

### Words

|JSON|Power Automate|
|:---------|:---------|
`words`|`Words`

Returns a string of words. For example: `aha insectarium exhausted`.

Return datatype: **string**