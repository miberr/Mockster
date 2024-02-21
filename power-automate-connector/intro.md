Mockster is an implementation of [FakerJS](https://fakerjs.dev) exposed as an REST API. I've also created a Microsoft Power Platform connector for easy use for citizen developers.

## Prerequisites

As Mockster is a premium connector, you'll need a premium lisenced user or a **[Developer plan](https://powerapps.microsoft.com/en-gb/developerplan/)**, where you can test premium features without lisence. Information about license can be found from **[Microsoft Power Platform Licensing Guide](https://go.microsoft.com/fwlink/?linkid=2085130)**.

## Get started Mockster

Getting started is very easy, and also free! Just search for Mockster in Power Automate or Power Apps, select the type of data you wish to be mocked for you and loop trough the results with create item actions for your selected database.

## Known issues and limitations

None

## Common errors and remedies

Note, that `seed` and `count` parameters accept only positive integers. If supplied with non-integer values a 400 HTTP response will be returned.

## FAQ

Provide a breakdown of frequently asked questions and their respective answers here. This can cover FAQs about interacting with the underlying service or about the connector itself.