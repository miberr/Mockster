---
sidebar_label: "🌐 Internets"
description: "Get rich data about things in the internet like users or networking terms."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 🌐 Internets

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

## Description

Get rich data about things in the internet like users or networking terms. Returns an array of objects with different internet properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get internet mockdata`.

<PAAImage src="/img/internet-action.jpg" alt="Get internet mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/internets
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "color": "#511134",
        "displayName": "Ted.Runolfsson48",
        "domainName": "clear-operating.info",
        "domainSuffix": "net",
        "domainWord": "sparkling-bather",
        "email": "Ted_Runolfsson10@yahoo.com",
        "emoji": "😺",
        "exampleEmail": "Ted_Runolfsson88@example.net",
        "httpMethod": "PUT",
        "httpStatusCode": 103,
        "ip": "b8bb:21ac:da45:baf2:fe1c:7e62:7f2c:c6dc",
        "ipv4": "146.120.42.165",
        "ipv6": "1eff:77af:b6d3:ae02:8e0d:1d7d:feb2:7a01",
        "mac": "c8:14:d0:db:1e:d4",
        "password": "eqv2uVVHsXkWcRs",
        "port": 5071,
        "protocol": "https",
        "url": "https://immaculate-debtor.biz",
        "userAgent": "Mozilla/5.0 (X11; Linux x86_64 AppleWebKit/532.2.0 (KHTML, like Gecko) Chrome/18.0.884.0 Safari/532.2.0",
        "userName": "Ted42"
    },
]
```

### Color

|JSON|Power Automate|
|:---------|:---------|
`color`|`Color`

Returns a random color code in hex format. For example: `#511134`.

Return datatype: **string**

### Display Name

|JSON|Power Automate|
|:---------|:---------|
`displayName`|`Display Name`

Returns a display name for a given user. All user related properties use the same first and lastname as a base. For example: `Ted.Runolfsson48`.

Return datatype: **string**

### Domain Name

|JSON|Power Automate|
|:---------|:---------|
`domainName`|`Domain Name`

Returns a random domain name. For example: `clear-operating.info`.

Return datatype: **string**

### Domain Suffix

|JSON|Power Automate|
|:---------|:---------|
`domainSuffix`|`Domain Suffix`

Returns a domain suffix. For example: `net`.

Return datatype: **string**

### Domain Word

|JSON|Power Automate|
|:---------|:---------|
`domainWord`|`Domain Word`

Returns a random word to be used in a domain. For example: `sparkling-bather`.

Return datatype: **string**

### Email

:::caution Caution
Returned email is realistic and could coincidentally be real email, do **NOT** use these for sending emails. For this usecase, you should use [exampleEmail](./internet#example-email).
::::

|JSON|Power Automate|
|:---------|:---------|
`email`|`Email`

Returns an email address. For example: `Ted_Runolfsson10@yahoo.com`.

Return datatype: **string**

### Emoji

|JSON|Power Automate|
|:---------|:---------|
`emoji`|`Emoji`

Returns a random emoji. For example: `😺`.

Return datatype: **string**

### Example Email

|JSON|Power Automate|
|:---------|:---------|
`exampleEmail`|`Example Email`

Returns an example email address. All user related properties use the same first and lastname as a base. For example: `Ted_Runolfsson88@example.net`.

Return datatype: **string**

### HTTP Method

|JSON|Power Automate|
|:---------|:---------|
`httpMethod`|`HTTP Method`

Returns a HTTP method. For example: `PUT`.

Return datatype: **string**

### HTTP Status Code

|JSON|Power Automate|
|:---------|:---------|
`httpStatusCode`|`HTTP Status Code`

Returns a HTTP status code. For example: `103`.

Return datatype: **number**

### IP

|JSON|Power Automate|
|:---------|:---------|
`ip`|`IP Address`

Returns a random IPv4 or IPv6 address. For example: `b8bb:21ac:da45:baf2:fe1c:7e62:7f2c:c6dc`.

Return datatype: **string**

### IPv4

|JSON|Power Automate|
|:---------|:---------|
`ipv4`|`IPv4 Address`

Returns an IPv4 address. For example: `146.120.42.165`.

Return datatype: **string**

### IPv6

|JSON|Power Automate|
|:---------|:---------|
`ipv6`|`IPv6 Address`

Returns an IPv6 address. For example: `1eff:77af:b6d3:ae02:8e0d:1d7d:feb2:7a01`.

Return datatype: **string**

### MAC

|JSON|Power Automate|
|:---------|:---------|
`mac`|`MAC Address`

Returns a MAC address. For example: `c8:14:d0:db:1e:d4`.

Return datatype: **string**

### Password

|JSON|Power Automate|
|:---------|:---------|
`password`|`Password`

Returns a random string to be used as a password. For example: `eqv2uVVHsXkWcRs`.

Return datatype: **string**

### Port

|JSON|Power Automate|
|:---------|:---------|
`port`|`Port Number`

Returns a random port number. For example: `5071`.

Return datatype: **number**

### Protocol

|JSON|Power Automate|
|:---------|:---------|
`protocol`|`Protocol`

Returns a protocol. For example: `https`.

Return datatype: **string**

### URL

|JSON|Power Automate|
|:---------|:---------|
`url`|`URL`

Returns a random URL. For example: `https://immaculate-debtor.biz`.

Return datatype: **string**

### User Agent

|JSON|Power Automate|
|:---------|:---------|
`userAgent`|`User Agent`

Returns a random user agent. For example: `Mozilla/5.0 (X11; Linux x86_64 AppleWebKit/532.2.0 (KHTML, like Gecko) Chrome/18.0.884.0 Safari/532.2.0`.

Return datatype: **string**

### User Name

|JSON|Power Automate|
|:---------|:---------|
`username`|`Username`

Returns a user name. All user related properties use the same first and lastname as a base. For example: `Ted42`.

Return datatype: **string**

## Related endpoints

To create other user data you can use the [🧍🏻 Persons](./persons) endpoint.