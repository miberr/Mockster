---
sidebar_label: "🗓️ Dates"
description: "Generate datetime data."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🗓️ Dates

:::danger Power Automate connector rolling out
Power Automate connector is currently rolling out. The connector might be in your environment already. If not, please wait for a couple of weeks or see updates on this site.
:::

## Description

Generate datetime data. While seed usage is available, note that most of the properties depend on the time the enpoint is requested, rather than a spesific seed value. Returns an array of properties, by default ten. All dates are returned as ISO-8601 datetime strings. `Month` and `weekday` might be localized.

## Query options

:::caution Seeding
Reproducible response is available only for `month`, `weekday` and `year`. All other depend on current time, rather than a seed value.
::::

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get date mockdata`.

<PAAImage src="/img/dates-action.jpg" alt="Get date mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/dates
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "anytime": "2023-12-30T01:54:24.658Z",
        "birthdate": "1948-06-14T08:47:26.296Z",
        "future": "2024-06-01T09:36:53.510Z",
        "month": "March",
        "past": "2023-08-20T17:40:37.262Z",
        "recent": "2024-01-02T03:09:38.383Z",
        "soon": "2024-01-03T11:00:08.493Z",
        "weekday": "Friday",
        "year": 2083
    }
]
```

### Anytime

|JSON|Power Automate|
|:---------|:---------|
`anytime`|`Anytime`

Returns a random date and time. Can be in the future or in the past. For example: `2023-12-30T01:54:24.658Z`.

Return datatype: **string**

### Birthdate

|JSON|Power Automate|
|:---------|:---------|
`birthdate`|`Birthdate`

Returns a random birthdate for an adult. For example: `1948-06-14T08:47:26.296Z`.

Return datatype: **string**

### Future

|JSON|Power Automate|
|:---------|:---------|
`future`|`Future`

Returns a random future date and time. For example: `2024-06-01T09:36:53.510Z`.

Return datatype: **string**

### Month

|JSON|Power Automate|
|:---------|:---------|
`month`|`Month`

Returns a random month name. For example: `March`.

Return datatype: **string**

### Past

|JSON|Power Automate|
|:---------|:---------|
`past`|`Past`

Returns a random past date and time. For example: `2023-08-20T17:40:37.262Z`.

Return datatype: **string**

### Recent

|JSON|Power Automate|
|:---------|:---------|
`recent`|`Recent`

Returns a random recent date and time in recent past, at most 5 days away. For example: `2024-01-02T03:09:38.383Z`.

Return datatype: **string**

### Soon

|JSON|Power Automate|
|:---------|:---------|
`soon`|`Soon`

Returns a random date and time in the near future, at most 5 days away. For example: `2024-01-03T11:00:08.493Z`.

Return datatype: **string**

### Weekday

|JSON|Power Automate|
|:---------|:---------|
`weekday`|`Weekday`

Returns a random weekday name. For example: `Friday`.

Return datatype: **string**

### Year

|JSON|Power Automate|
|:---------|:---------|
`year`|`Year`

Returns a random year between 1900 and 2100. For example: `2083`.

Return datatype: **number**

## Related endpoints

Plane tickets need some dates, create the ticket data with [✈️ Airlines](./airlines) endpoint.