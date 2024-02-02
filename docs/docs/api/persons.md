---
sidebar_label: "🧍🏻 Persons"
description: "Generate data for a person."
---

# 🧍🏻 Persons

Generate data for a person. Returns an array of properties, by default ten. Some properties might be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/persons
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "bio": "diabetes supporter, engineer",
        "birthday": "1998-10-17T08:20:10.984Z",
        "businessPhone": "1-617-812-6179 x7382",
        "city": "McLaughlinchester",
        "country": "New Caledonia",
        "creditLimit": 6203000,
        "department": "Purchasing",
        "description": "significance lover",
        "email": "Angelo.Runte95@gmail.com",
        "firstName": "Angelo",
        "fullName": "Angelo Runte",
        "gender": "Trans male",
        "jobArea": "Intranet",
        "lastName": "Runte",
        "sexType": "male"
    }
]
```

### Bio

|JSON|Power Automate|
|:---------|:---------|
`bio`|`Bio`

Returns the bio of the person. For example: `diabetes supporter, engineer`.

Return datatype: **string**

### Birthday

|JSON|Power Automate|
|:---------|:---------|
`birthday`|`Birthday`

Returns the birthday of the person. For example: `1998-10-17T08:20:10.984Z`.

Return datatype: **string**

### Business Phone

|JSON|Power Automate|
|:---------|:---------|
`businessPhone`|`Business Phone`

Returns the business phone number of the person. For example: `1-617-812-6179 x7382`.

Return datatype: **string**

### City

|JSON|Power Automate|
|:---------|:---------|
`city`|`City`

Returns the city of the person. For example: `McLaughlinchester`.

Return datatype: **string**

### Country

|JSON|Power Automate|
|:---------|:---------|
`country`|`Country`

Returns the country of the person. For example: `New Caledonia`.

Return datatype: **string**

### Credit Limit

|JSON|Power Automate|
|:---------|:---------|
`creditLimit`|`Credit Limit`

Returns the credit limit of the person. For example: `6203000`.

Return datatype: **number**

### Department

|JSON|Power Automate|
|:---------|:---------|
`department`|`Department`

Returns the department of the person. For example: `Purchasing`.

Return datatype: **string**

### Description

|JSON|Power Automate|
|:---------|:---------|
`description`|`Description`

Returns the description of the person. For example: `significance lover`.

Return datatype: **string**

### Email

|JSON|Power Automate|
|:---------|:---------|
`email`|`Email`

Returns the email of the person. For example: `Angelo.Runte95@gmail.com`.

Return datatype: **string**

### First Name

|JSON|Power Automate|
|:---------|:---------|
`firstName`|`First Name`

Returns the first name of the person. For example: `Angelo`.

Return datatype: **string**

### Full Name

|JSON|Power Automate|
|:---------|:---------|
`fullName`|`Full Name`

Returns the full name of the person. For example: `Angelo Runte`.

Return datatype: **string**

### Gender

|JSON|Power Automate|
|:---------|:---------|
`gender`|`Gender`

Returns the gender of the person. For example: `Trans male`.

Return datatype: **string**

### Job Area

|JSON|Power Automate|
|:---------|:---------|
`jobArea`|`Job Area`

Returns the job area of the person. For example: `Intranet`.

Return datatype: **string**

### Last Name

|JSON|Power Automate|
|:---------|:---------|
`lastName`|`Last Name`

Returns the last name of the person. For example: `Runte`.

Return datatype: **string**

### Sex Type

|JSON|Power Automate|
|:---------|:---------|
`sexType`|`Sex Type`

Returns the sex type of the person. For example: `male`.

Return datatype: **string**