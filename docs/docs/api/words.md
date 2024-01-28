---
sidebar_label: "🆒 Words"
description: "Generate word data."
---

# 🆒 Words

Generate phones related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/science
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