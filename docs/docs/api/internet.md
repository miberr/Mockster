---
sidebar_label: "🌐 Internet"
description: "Generate hacker related data."
---

# 🌐 Internet

Generate internet related data. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/internets
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg",
        "color": "#0d667f",
        "displayName": "Lillian_Leuschke1",
        "domainName": "quick-outhouse.biz",
        "domainSuffix": "biz",
        "domainWord": "thunderous-observation",
        "email": "Lonzo_Lowe95@gmail.com",
        "emoji": "🤶🏻",
        "exampleEmail": "Americo41@example.org",
        "httpMethod": "GET",
        "httpStatusCode": 408,
        "ip": "85.142.141.159",
        "ipv4": "255.143.84.244",
        "ipv6": "a40e:aa0d:8fb4:39bf:3f56:573c:5f39:8d94",
        "mac": "76:6f:a3:5c:ea:71",
        "password": "bS2Q23a2yvUMw5r",
        "port": 51968,
        "protocol": "http",
        "url": "https://careful-crook.biz",
        "userAgent": "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.3; Trident/5.0)",
        "userName": "Ansel44"
    }
]
```

### Avatar

|JSON|Power Automate|
|:---------|:---------|
`avatar`|`Avatar`

Returns a URL to an avatar image. For example: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg`.

Return datatype: **string**

### Color

|JSON|Power Automate|
|:---------|:---------|
`color`|`Color`

Returns a color code. For example: `#0d667f`.

Return datatype: **string**

### Display Name

|JSON|Power Automate|
|:---------|:---------|
`displayName`|`Display Name`

Returns a display name. For example: `Lillian_Leuschke1`.

Return datatype: **string**

### Domain Name

|JSON|Power Automate|
|:---------|:---------|
`domainName`|`Domain Name`

Returns a domain name. For example: `quick-outhouse.biz`.

Return datatype: **string**

### Domain Suffix

|JSON|Power Automate|
|:---------|:---------|
`domainSuffix`|`Domain Suffix`

Returns a domain suffix. For example: `biz`.

Return datatype: **string**

### Domain Word

|JSON|Power Automate|
|:---------|:---------|
`domainWord`|`Domain Word`

Returns a domain word. For example: `thunderous-observation`.

Return datatype: **string**

### Email

|JSON|Power Automate|
|:---------|:---------|
`email`|`Email`

Returns an email address. For example: `Lonzo_Lowe95@gmail.com`.

Return datatype: **string**

### Emoji

|JSON|Power Automate|
|:---------|:---------|
`emoji`|`Emoji`

Returns an emoji. For example: `🤶🏻`.

Return datatype: **string**

### Example Email

|JSON|Power Automate|
|:---------|:---------|
`exampleEmail`|`Example Email`

Returns an example email address. For example: `Americo41@example.org`.

Return datatype: **string**

### HTTP Method

|JSON|Power Automate|
|:---------|:---------|
`httpMethod`|`HTTP Method`

Returns an HTTP method. For example: `GET`.

Return datatype: **string**

### HTTP Status Code

|JSON|Power Automate|
|:---------|:---------|
`httpStatusCode`|`HTTP Status Code`

Returns an HTTP status code. For example: `408`.

Return datatype: **number**

### IP

|JSON|Power Automate|
|:---------|:---------|
`ip`|`IP`

Returns an IP address. For example: `85.142.141.159`.

Return datatype: **string**

### IPv4

|JSON|Power Automate|
|:---------|:---------|
`ipv4`|`IPv4`

Returns an IPv4 address. For example: `255.143.84.244`.

Return datatype: **string**

### IPv6

|JSON|Power Automate|
|:---------|:---------|
`ipv6`|`IPv6`

Returns an IPv6 address. For example: `a40e:aa0d:8fb4:39bf:3f56:573c:5f39:8d94`.

Return datatype: **string**

### MAC

|JSON|Power Automate|
|:---------|:---------|
`mac`|`MAC`

Returns a MAC address. For example: `76:6f:a3:5c:ea:71`.

Return datatype: **string**

### Password

|JSON|Power Automate|
|:---------|:---------|
`password`|`Password`

Returns a password. For example: `bS2Q23a2yvUMw5r`.

Return datatype: **string**

### Port

|JSON|Power Automate|
|:---------|:---------|
`port`|`Port`

Returns a port number. For example: `51968`.

Return datatype: **number**

### Protocol

|JSON|Power Automate|
|:---------|:---------|
`protocol`|`Protocol`

Returns a protocol. For example: `http`.

Return datatype: **string**

### URL

|JSON|Power Automate|
|:---------|:---------|
`url`|`URL`

Returns a URL. For example: `https://careful-crook.biz`.

Return datatype: **string**

### User Agent

|JSON|Power Automate|
|:---------|:---------|
`userAgent`|`User Agent`

Returns a user agent. For example: `Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.3; Trident/5.0)`.

Return datatype: **string**

### User Name

|JSON|Power Automate|
|:---------|:---------|
`userName`|`User Name`

Returns a user name. For example: `Ansel44`.

Return datatype: **string**