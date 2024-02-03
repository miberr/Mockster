---
sidebar_position: 2
sidebar_label: "Getting started"
---

# Getting Started

You can get started by making your first HTTP-request to Mocksters endpoint or from Power Automate.

## What you'll need

:::danger Power Automate connector not yet available
Power Automate connector can be expected to be available Q1/2024
:::

- For REST you don't need anything, go ahead and make your first request!
- For Power Automate, you can find the Mockster connector when adding an action to your workflow.

:::caution Licensing

Please note, that you'll need a Power Apps or Power Automate Premium license to leverege non-standard connectors, like Mockster. Information about license can be found from **[Microsoft Power Platform Licensing Guide](https://go.microsoft.com/fwlink/?linkid=2085130)**.

Another option is using **[Developer plan](https://powerapps.microsoft.com/en-gb/developerplan/)**. It's a great option for development and testing out premium features.

::::

## Getting reproducible results

:::caution Use with care

You should not use seed with every request. When using the same seed and endpoint, the result is the same every time. In short, you don't need a seed value 99% of the time.

::::

All endpoints include `seed` parameter. With identical seed you can reproduce the results for different requests. By setting your own seed, you get the same results every time. This can be helpful in some instanses, although you souldn't use seed for every request. For example:

These two requests return randomised results. This is default behaviour when `seed` is not set.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/musics
Accept: application/json  

GET https://api.mockster.dev/api/v1/musics
Accept: application/json  
```

```jsx title="JSON"
// First response
[
    {
        "genre": "Country",
        "songName": "Just Dance"
    }
]
// Second response
[
    {
        "genre": "Pop",
        "songName": "It's holiday season"
    }
]
```

However, when a seed is given, you will receive the same response every time. In the example `123` is given for a `seed`.

```http title="HTTP"
GET https://api.mockster.dev/api/v1/musics?seed=123
Accept: application/json  

GET https://api.mockster.dev/api/v1/musics?seed=123
Accept: application/json  
```

```jsx title="JSON"
// First response
[
    {
        "genre": "Country",
        "songName": "Just Dance"
    }
]
// Second response
[
    {
        "genre": "Country",
        "songName": "Just Dance"
    }
]
```