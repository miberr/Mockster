---
sidebar_label: "💶 Finances"
description: "Generate finance related data."
---

# 💶 Finances

## Description

Generate finance related data, like credit card information, account information and so on. Returns an array of properties, by default ten. Some properties might be localized.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Locale`| Localization for the response, see [Localization](./../localization) | en |
|`Seed` | Seed value for reproducible results. | null |

## Request

```http title="HTTP"
GET https://mockster.dev/api/v1/finances
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "accountName": "Savings Account",
        "accountNumber": "54296344",
        "amount": 540.29,
        "bic": "OSCTPNT6A96",
        "bitcoinAddress": "36ks9VMpLaFeWbR8hu1Uuz4zgbUid4XWvn",
        "creditCardCVV": "400",
        "creditCardIssuer": "visa",
        "creditCardNumber": "4584186609458",
        "currencyCode": "TRY",
        "currencyName": "Turkish Lira",
        "currencySymbol": "₺",
        "ethereumAddress": "0x83a44fb302d6d7a68fcdac2b2efdfc3e0ea53c2a",
        "iban": "GL3144820110800764",
        "litecoinAddress": "Ljo4LU3FMxfVyVF7sTVvDzfBhp",
        "maskedNumber": "(...0859)",
        "pin": "1309",
        "routingNumber": "164294325",
        "transactionDescription": "deposit transaction at Reinger, Hamill and Gutmann using card ending with ***(...3677) for TJS 820.80 in account ***44178655",
        "transactionType": "payment"
    }
]
```

### Account Name

|JSON|Power Automate|
|:---------|:---------|
`accountName`|`Account Name`

Returns a random account name. For example: `Savings Account`.

Return datatype: **string**

### Account Number

|JSON|Power Automate|
|:---------|:---------|
`accountNumber`|`Account Number`

Returns a random account number in local format. For example: `54296344`.

Return datatype: **string**

### Amount

|JSON|Power Automate|
|:---------|:---------|
`amount`|`Amount`

Returns a random amount for a transaction. Value has two decimal places. For example: `540.29`.

Return datatype: **number**

### BIC

|JSON|Power Automate|
|:---------|:---------|
`bic`|`BIC`

Returns a random BIC (Bank Identifier Code). For example: `OSCTPNT6A96`.

Return datatype: **string**

### Bitcoin Address

|JSON|Power Automate|
|:---------|:---------|
`bitcoinAddress`|`Bitcoin Address`

Returns a random Bitcoin address. For example: `36ks9VMpLaFeWbR8hu1Uuz4zgbUid4XWvn`.

Return datatype: **string**

### Credit Card CVV

|JSON|Power Automate|
|:---------|:---------|
`creditCardCVV`|`Credit Card CVV`

Returns a random Credit Card CVV. For example: `400`.

Return datatype: **string**

### Credit Card Issuer

|JSON|Power Automate|
|:---------|:---------|
`creditCardIssuer`|`Credit Card Issuer`

Returns a random Credit Card Issuer. For example: `visa`.

Return datatype: **string**

### Credit Card Number

|JSON|Power Automate|
|:---------|:---------|
`creditCardNumber`|`Credit Card Number`

Returns a random Credit Card Number from the issuer from the [issuer](./finances#credit-card-issuer) property. For example: `4584186609458`.

Return datatype: **string**

### Currency Code

|JSON|Power Automate|
|:---------|:---------|
`currencyCode`|`Currency Code`

Returns a random Currency Code. [Currency Code](./finances#currency-code), [Currency Name](./finances#currency-name) and [Currency Symmbol](./finances#currency-symbol) are from them same currency. For example: `TRY`.

Return datatype: **string**

### Currency Name

|JSON|Power Automate|
|:---------|:---------|
`currencyName`|`Currency Name`

Returns a random Currency Name. [Currency Code](./finances#currency-code), [Currency Name](./finances#currency-name) and [Currency Symmbol](./finances#currency-symbol) are from them same currency. For example: `Turkish Lira`.

Return datatype: **string**

### Currency Symbol

|JSON|Power Automate|
|:---------|:---------|
`currencySymbol`|`Currency Symbol`

Returns a random Currency Symbol. [Currency Code](./finances#currency-code), [Currency Name](./finances#currency-name) and [Currency Symmbol](./finances#currency-symbol) are from them same currency. For example: `₺`.

Return datatype: **string**

### Ethereum Address

|JSON|Power Automate|
|:---------|:---------|
`ethereumAddress`|`Ethereum Address`

Returns a random Ethereum Address. For example: `0x83a44fb302d6d7a68fcdac2b2efdfc3e0ea53c2a`.

Return datatype: **string**

### IBAN

|JSON|Power Automate|
|:---------|:---------|
`iban`|`IBAN`

Returns a random IBAN (International Bank Account Number). For example: `GL3144820110800764`.

Return datatype: **string**

### Litecoin Address

|JSON|Power Automate|
|:---------|:---------|
`litecoinAddress`|`Litecoin Address`

Returns a random Litecoin Address. For example: `Ljo4LU3FMxfVyVF7sTVvDzfBhp`.

Return datatype: **string**

### Masked Number

|JSON|Power Automate|
|:---------|:---------|
`maskedNumber`|`Masked Number`

Returns a random Masked Number. For example: `(…0859)`.

Return datatype: **string**

### PIN

|JSON|Power Automate|
|:---------|:---------|
`pin`|`PIN`

Returns a random PIN (Personal Identification Number). For example: `1309`.

Return datatype: **string**

### Routing Number

|JSON|Power Automate|
|:---------|:---------|
`routingNumber`|`Routing Number`

Returns a random Routing Number. For example: `164294325`.

Return datatype: **string**

### Transaction Description

|JSON|Power Automate|
|:---------|:---------|
`transactionDescription`|`Transaction Description`

Returns a random Transaction Description. For example: `deposit transaction at Reinger, Hamill and Gutmann using card ending with ***(...3677) for TJS 820.80 in account ***44178655`.

Return datatype: **string**

### Transaction Type

|JSON|Power Automate|
|:---------|:---------|
`transactionType`|`Transaction Type`

Returns a random Transaction Type. For example: `payment`.

Return datatype: **string**

## Related endpoints

To create realistic personal finance data you can use the [🧍🏻 Persons](./persons) endpoint.