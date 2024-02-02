---
sidebar_label: "🏢 Companies"
description: "Generate company related data, like names and company jargon. Returns an array of properties, by default ten. Some of the properties can be localized."
---

# 🏢 Companies

## Description

Generate company related data, like names and company jargon. Returns an array of properties, by default ten. Some of the properties can be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results | null |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/companies
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "buzzAdjective": "extensible",
        "buzzNoun": "initiatives",
        "buzzPhrase": "mesh clicks-and-mortar eyeballs",
        "buzzVerb": "expedite",
        "catchPhrase": "Business-focused responsive moratorium",
        "catchPhraseAdjective": "Integrated",
        "catchPhraseDescriptor": "uniform",
        "catchPhraseNoun": "focus group",
        "city": "Weissnatchester",
        "country": "Saudi Arabia",
        "creditLimit": 9000000,
        "email": "Dylan4@gmail.com",
        "mobilePhone": "(337) 925-6199",
        "name": "Dibbert, Kirlin and Hammes",
        "numberOfEmployees": 9820,
        "phone": "(836) 964-9811",
        "revenue": 8000000,
        "streetAddress": "78999 Zemlak Field",
        "website": "https://visible-derivative.com/",
        "zipCode": "54306-5071"
    }
]
```

### Buzz Adjective

|JSON|Power Automate|
|:---------|:---------|
`buzzAdjective`|`Buzz Adjective`

Returns a random buzz adjective. For example: `extensible`.

Return datatype: **string**

### Buzz Noun

|JSON|Power Automate|
|:---------|:---------|
`buzzNoun`|`Buzz Noun`

Returns a random buzz noun. For example: `initiatives`.

Return datatype: **string**

### Buzz Phrase

|JSON|Power Automate|
|:---------|:---------|
`buzzPhrase`|`Buzz Phrase`

Returns a random buzz phrase. For example: `mesh clicks-and-mortar eyeballs`.

Return datatype: **string**

### Buzz Verb

|JSON|Power Automate|
|:---------|:---------|
`buzzVerb`|`Buzz Verb`

Returns a random buzz verb. For example: `expedite`.

Return datatype: **string**

### Catch Phrase

|JSON|Power Automate|
|:---------|:---------|
`catchPhrase`|`Catch Phrase`

Returns a random catch phrase. For example: `Business-focused responsive moratorium`.

Return datatype: **string**

### Catch Phrase Adjective

|JSON|Power Automate|
|:---------|:---------|
`catchPhraseAdjective`|`Catch Phrase Adjective`

Returns a random catch phrase adjective. For example: `Integrated`.

Return datatype: **string**

### Catch Phrase Descriptor

|JSON|Power Automate|
|:---------|:---------|
`catchPhraseDescriptor`|`Catch Phrase Descriptor`

Returns a random catch phrase descriptor. For example: `uniform`.

Return datatype: **string**

### Catch Phrase Noun

|JSON|Power Automate|
|:---------|:---------|
`catchPhraseNoun`|`Catch Phrase Noun`

Returns a random catch phrase noun. For example: `focus group`.

Return datatype: **string**

### City

|JSON|Power Automate|
|:---------|:---------|
`city`|`City`

Returns a random city. For example: `Weissnatchester`.

Return datatype: **string**

### Country

|JSON|Power Automate|
|:---------|:---------|
`country`|`Country`

Returns a random country. For example: `Saudi Arabia`.

Return datatype: **string**

### Credit Limit

|JSON|Power Automate|
|:---------|:---------|
`creditLimit`|`Credit Limit`

Returns a random credit limit. This is a integer from 1 to 100 million. Displayed in millions. For example: `9000000`.

Return datatype: **number**

### Email

|JSON|Power Automate|
|:---------|:---------|
`email`|`Email`

Returns a random email. For example: `Dylan4@gmail.com`.

Return datatype: **string**

### Mobile Phone

|JSON|Power Automate|
|:---------|:---------|
`mobilePhone`|`Mobile Phone`

Returns a random mobile phone number. For example: `(337) 925-6199`.

Return datatype: **string**

### Name

|JSON|Power Automate|
|:---------|:---------|
`name`|`Name`

Returns a random name. For example: `Dibbert, Kirlin and Hammes`.

Return datatype: **string**

### Number of Employees

|JSON|Power Automate|
|:---------|:---------|
`numberOfEmployees`|`Number of Employees`

Returns a random number of employees. This is a number between 1 and 10 000. For example: `9820`.

Return datatype: **number**

### Phone

|JSON|Power Automate|
|:---------|:---------|
`phone`|`Phone`

Returns a random phone number. For example: `(836) 964-9811`.

Return datatype: **string**

### Revenue

|JSON|Power Automate|
|:---------|:---------|
`revenue`|`Revenue`

Returns a random revenue. This is a integer between 1 and 100 million. Displayed in millions.  For example: `8000000`.

Return datatype: **number**

### Street Address

|JSON|Power Automate|
|:---------|:---------|
`streetAddress`|`Street Address`

Returns a random street address. For example: `78999 Zemlak Field`.

Return datatype: **string**

### Website

|JSON|Power Automate|
|:---------|:---------|
`website`|`Website`

Returns a random website. For example: `https://visible-derivative.com/`.

Return datatype: **string**

### Zip Code

|JSON|Power Automate|
|:---------|:---------|
`zipCode`|`Zip Code`

Returns a random zip code. For example: `54306-5071`.

Return datatype: **string**

## Related endpoints

To create realistic employee data you can use the [🧍🏻 Persons](./persons) endpoint.
For product data, try the [🧸 Products](./products) endpoint.