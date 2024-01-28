---
sidebar_label: "🥷🏼 Hackers"
description: "Generate hacker related data."
---

# 🥷🏼 Hackers

## Description

Generate hacker or IT related buzzwords. Returns an array of properties, by default ten. Some properties might be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

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

Returns an abbreviation from technologies. For example: `XSS`.

Return datatype: **string**

### Adjective

|JSON|Power Automate|
|:---------|:---------|
`adjective`|`Adjective`

Returns a hacker or technology related adjective. For example: `1080p`.

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

Returns a hacker or technology related noun. For example: `card`.

Return datatype: **string**

### Phrase

|JSON|Power Automate|
|:---------|:---------|
`phrase`|`Phrase`

Returns a hacker or technology related phrase. For example: `I'll connect the open-source RSS interface, that should circuit the VGA transmitter!`.

Return datatype: **string**

### Verb

|JSON|Power Automate|
|:---------|:---------|
`verb`|`Verb`

Returns a hacker or technology related verb. For example: `override`.

Return datatype: **string**

## Related endpoints

There are multiple endpoints that create similar data:

- [🆒 Words](./words) endpoint for generic words.
- [💬 Lorem](./lorem) endpoint for lorem ipsum words and phrases.
