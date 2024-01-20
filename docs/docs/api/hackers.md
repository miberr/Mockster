---
sidebar_label: "🥷🏼 Hackers"
description: "Generate hacker related data."
---

# 🥷🏼 Hackers

Generate hacker related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/hackers
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "abbreviation": "XSS",
        "adjective": "1080p",
        "ingverb": "quantifying",
        "noun": "card",
        "phrase": "I'll connect the open-source RSS interface, that should circuit the VGA transmitter!",
        "verb": "override"
    }
]
```

### Abbreviation

|JSON|Power Automate|
|:---------|:---------|
`abbreviation`|`Abbreviation`

Returns a hacker abbreviation. For example: `XSS`.

Return datatype: **string**

### Adjective

|JSON|Power Automate|
|:---------|:---------|
`adjective`|`Adjective`

Returns a hacker adjective. For example: `1080p`.

Return datatype: **string**

### Ingverb

|JSON|Power Automate|
|:---------|:---------|
`ingverb`|`Ingverb`

Returns a verb ending in "ing". For example: `quantifying`.

Return datatype: **string**

### Noun

|JSON|Power Automate|
|:---------|:---------|
`noun`|`Noun`

Returns a hacker noun. For example: `card`.

Return datatype: **string**

### Phrase

|JSON|Power Automate|
|:---------|:---------|
`phrase`|`Phrase`

Returns a hacker phrase. For example: `I'll connect the open-source RSS interface, that should circuit the VGA transmitter!`.

Return datatype: **string**

### Verb

|JSON|Power Automate|
|:---------|:---------|
`verb`|`Verb`

Returns a hacker verb. For example: `override`.

Return datatype: **string**