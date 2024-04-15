---
sidebar_label: "💬 Lorem"
description: "Generate Lorem Ipsum."
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# 💬 Lorem

:::danger Power Automate connector rolling out
Power Automate connector is currently rolling out. The connector might be in your environment already. If not, please wait for a couple of weeks or see updates on this site.
:::

## Description

Generate lorem ipsum. Returns an array of properties, by default ten.

## Query options

|Parameter|Description|Default|
|---------|:---------|---------|
|`Count`| Count of objects returned | 10 |
|`Seed` | Seed value for reproducible results. | null |

## Request

### Power Automate

In Power Automate you can find this endpoint by searching for `Get Lorem Ipsum mockdata`.

<PAAImage src="/img/lorem-action.jpg" alt="Get lorem mockdata action" />

### HTTP

Or you can use an HTTP request.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/lorems
Accept: application/json  
```

## Response 

### Example 

```jsx title="JSON"
[
    {
        "lines": "Vorax contigo convoco.\nBeatae comparo animadverto conicio iste.\nUterque succedo attonbitus sordeo est clementia.\nEnim conicio quam praesentium curto adflicto audax.",
        "paragraph": "Est tubineus sponte conor nam ipsam optio. Amet volaticus demitto. Et angelus alii demonstro iure.",
        "paragraphs": "Theca adamo video supplanto. Voluptates conturbo creator bellicus aut vir adinventitias altus cupiditate canto. Curo decumbo adipiscor inflammatio sponte cornu aegrotatio sopor capio calcar.\nBibo audeo adipisci beatae ustilo ambulo. Derelinquo desolo spectaculum inventore derelinquo asper carcer caries. Clementia pauper apto armarium.\nDedecor vis tui averto vorax praesentium tantillus catena adhaero adsidue. Decimus vitium aequitas veritas auctor adinventitias desparatus. Defetiscor vicissitudo absum delinquo amplexus acsi sed uter depopulo utor.",
        "sentence": "Provident supra custodia aegrotatio.",
        "sentences": "Terminatio cubo voco trado amaritudo delectus. Beatus attollo arbitro desparatus una angelus vesper. Provident voluntarius capitulus universe compono. Conscendo animadverto apto aegrotatio. Ut virgo turbo sol viscus quam.",
        "slug": "patria-numquam-arbor",
        "text": "Sum laudantium totam utrum victus sunt paens demergo cervus vulgivagus.\nVentus clarus cotidie conduco sollicito degero carmen turbo combibo.\nTandem vulpes villa tribuo doloremque tergeo.",
        "word": "circumvenio",
        "words": "toties ter colligo"
    }
]
```

### Lines

|JSON|Power Automate|
|:---------|:---------|
`lines`|`Lines`

Returns a set of lines. For example: `Vorax contigo convoco.\nBeatae comparo animadverto conicio iste.\nUterque succedo attonbitus sordeo est clementia.\nEnim conicio quam praesentium curto adflicto audax.`.

Return datatype: **string**

### Paragraph

|JSON|Power Automate|
|:---------|:---------|
`paragraph`|`Paragraph`

Returns a paragraph. For example: `Est tubineus sponte conor nam ipsam optio. Amet volaticus demitto. Et angelus alii demonstro iure.`.

Return datatype: **string**

### Paragraphs

|JSON|Power Automate|
|:---------|:---------|
`paragraphs`|`Paragraphs`

Returns multiple paragraphs. For example: `Theca adamo video supplanto. Voluptates conturbo creator bellicus aut vir adinventitias altus cupiditate canto. Curo decumbo adipiscor inflammatio sponte cornu aegrotatio sopor capio calcar.\nBibo audeo adipisci beatae ustilo ambulo. Derelinquo desolo spectaculum inventore derelinquo asper carcer caries. Clementia pauper apto armarium.\nDedecor vis tui averto vorax praesentium tantillus catena adhaero adsidue. Decimus vitium aequitas veritas auctor adinventitias desparatus. Defetiscor vicissitudo absum delinquo amplexus acsi sed uter depopulo utor.`.

Return datatype: **string**

### Sentence

|JSON|Power Automate|
|:---------|:---------|
`sentence`|`Sentence`

Returns a sentence. For example: `Provident supra custodia aegrotatio.`.

Return datatype: **string**

### Sentences

|JSON|Power Automate|
|:---------|:---------|
`sentences`|`Sentences`

Returns multiple sentences. For example: `Terminatio cubo voco trado amaritudo delectus. Beatus attollo arbitro desparatus una angelus vesper. Provident voluntarius capitulus universe compono. Conscendo animadverto apto aegrotatio. Ut virgo turbo sol viscus quam.`.

Return datatype: **string**

### Slug

|JSON|Power Automate|
|:---------|:---------|
`slug`|`Slug`

Returns a slug. For example: `patria-numquam-arbor`.

Return datatype: **string**

### Text

|JSON|Power Automate|
|:---------|:---------|
`text`|`Text`

Returns a text. For example: `Sum laudantium totam utrum victus sunt paens demergo cervus vulgivagus.\nVentus clarus cotidie conduco sollicito degero carmen turbo combibo.\nTandem vulpes villa tribuo doloremque tergeo.`.

Return datatype: **string**

### Word

|JSON|Power Automate|
|:---------|:---------|
`word`|`Word`

Returns a word. For example: `circumvenio`.

Return datatype: **string**

### Words

|JSON|Power Automate|
|:---------|:---------|
`words`|`Words`

Returns multiple words. For example: `toties ter colligo`.

Return datatype: **string**