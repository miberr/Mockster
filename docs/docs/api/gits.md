---
sidebar_label: "📁 Gits"
description: "Generate git related data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 📁 Gits

:::info Power Automate connector in preview
Power Automate connector is currently in preview. It has all the functionality. Preview flag will be removed in some time as Mockster finds its users.
:::

## Description

Generate git related data. Returns an array of properties, by default ten. 

## Query options

:::caution Seeding
Reproducible response is not available only for `commitEntry` and `commitDate`. These depends on current time, rather than a seed value.
::::

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get git mockdata`.

<PAAImage src="/img/gits-action.jpg" alt="Get git mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/gits
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "branch": "interface-compress",
        "commitDate": "Tue Jan 2 18:12:21 2024 +0300",
        "commitEntry": "commit dfc399b0af57a6fdd9908cbcf7aefae7e26b5fe8\r\nAuthor: Randi Flatley <Randi.Flatley1@hotmail.com>\r\nDate: Tue Jan 2 13:18:37 2024 -1100\r\n\r\n    copy primary pixel\r\n",
        "commitMessage": "compress open-source array",
        "commitSha": "b5daadecfa08c22c5fea7ba3c0fdc5bdff4bab87"
    }
]
```

### Branch

|JSON|Power Automate|
|:---------|:---------|
`branch`|`Branch`

Returns the branch name of the commit. For example: `interface-compress`.

Return datatype: **string**

### Commit Date

|JSON|Power Automate|
|:---------|:---------|
`commitDate`|`Commit Date`

Returns the date and time of the commit. Formatting is the same as in git log. For example: `Tue Jan 2 18:12:21 2024 +0300`.

Return datatype: **string**

### Commit Entry

|JSON|Power Automate|
|:---------|:---------|
`commitEntry`|`Commit Entry`

Returns the full commit entry, including the commit SHA, author, date, and message. For example: `commit dfc399b0af57a6fdd9908cbcf7aefae7e26b5fe8\r\nAuthor: Randi Flatley <Randi.Flatley1@hotmail.com>\r\nDate: Tue Jan 2 13:18:37 2024 -1100\r\n\r\n    copy primary pixel\r\n`.

Return datatype: **string**

### Commit Message

|JSON|Power Automate|
|:---------|:---------|
`commitMessage`|`Commit Message`

Returns the commit message. For example: `compress open-source array`.

Return datatype: **string**

### Commit SHA

|JSON|Power Automate|
|:---------|:---------|
`commitSha`|`Commit SHA`

Returns the SHA of the commit. For example: `b5daadecfa08c22c5fea7ba3c0fdc5bdff4bab87`.

Return datatype: **string**