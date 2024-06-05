---
sidebar_position: 3
sidebar_label: "Usage in Power Platform"
---

import PAAImage from '@site/src/components/powerAutomateActionImage'

# Using Mockster in Microsoft Power Platform

Mockster is made for citizen develpers. In this guide you'll learn how to create complex data structures with Mockster to help with your app development efforts. 🚀

## Create your first set of data

Getting started is easy. For our first example, let's create some company data in Microsoft Dataverse.

1. Create a new Power Automate workflow.
1. Select `Manually trigger a flow` for the trigger.
1. Add `Mocksters Get company mockdata` -action. For more information about the endpoint, see [🏢 Companies](./api/companies).
1. Add an `Add a new row` -action from Dataverse connector. 
1. Select `Accounts` as table name.
1. Fill fields with data from the dynamic content. Adding your first value will wrap the action in a loop. 

<PAAImage src="/img/first-workflow.png" alt="First workflow" />

That's it! Now you got a workflow to create some company data. By default Mockster will return 10 rows of data. This yoy may of course change and create as much as you want.

## Randomizing the count of rows created

All Mocksters endpoints include a count parameter. You can manually change this from the default value of 10 to what ever static value you prefer. If you'd like some randomness in this as well, you can use `rand()` expression to accomplish this.

`rand()` takes two parameters - minimum value and maximum value. With this you can randomize your workflow to create x amount of rows. For example, `rand(10, 100)` will return a value between 10 and 100.

<PAAImage src="/img/using-rand-expression.png" alt="Using rand expression" />

## Create data for relationships

Simple data is all fun and nice, but the true power comes from being able to create complex data structures and mock data for them. In the following examples we'll explore how you might go about doing that.

### Create data for One-to-Many relationship

First, let's tackle 1:N relationship. We'll use the same start as before, we'll create some companies. While creating companies, let's also call the [🧍🏻 Persons endpoint](./api/persons) to add contacts to those companies.

1. Create a new Power Automate workflow.
1. Select `Manually trigger a flow` for the trigger.
1. Add Mocksters `Get company mockdata` -action. For more information about the endpoint, see [🏢 Companies](./api/companies).
1. Add an `Add a new row` -action from Dataverse connector. 
1. Select `Accounts` as table name.
1. Fill fields with data from the dynamic content. Adding your first value will wrap the action in a loop. 
1. Inside the loop, add `Get people mockdata` -action from Mockster. For more information about the endpoint, see [🧍🏻 Persons](./api/persons).
1. In the `count` parameter, add expression `rand(1,10)` to randomly create between 1 and 10 contacts per company.
1. Add `Add a new row` -action from Dataverse connector again. 
1. Select `Contacts` as table name.
1. Fill fields with data from the dynamic content. Adding your first value will wrap the action in a loop. 
1. For `Company Name (Accounts)` add `accounts()`. Inside the parentheses add `Account` from dynamic content. This is the magic part for this action. This will create the relationship between a contact and an account.

With this, you've now created a workflow to create some companies as well as contacts for them. That's awesome 😎!

<PAAImage src="/img/1-n-workflow.png" alt="1:N relationship" />

### Create data for Many-to-Many relationship

Many to many relationship can be used in all sorts of things, but a common scenario is to add tags to some record. For this example I've created a new table in Dataverse called `Tag`. This table has N:N relationship with `Account` table. I'll first create records and then associate them with each other. Tags are in this case nouns from the [🆒 Words endpoint](./api/words).

1. Create a new Power Automate workflow.
1. Select `Manually trigger a flow` for the trigger.
1. Add `Initialize variable` -action. Type is array and name `companyIds`. We'll add all created account IDs to this variable.
    <PAAImage src="/img/company-ids-variable.png" alt="Initialize companyIds variable" />
1. Add another `Initialize variable` -action. Type is array and name `tagIds`. We'll add all created tag IDs to this variable.
1. Add Mocksters `Get company mockdata` -action. For more information about the endpoint, see [🏢 Companies](./api/companies).
1. Add an `Add a new row` -action from Dataverse connector. 
1. Select `Accounts` as table name.
1. Fill fields with data from the dynamic content. Adding your first value will wrap the action in a loop. 
1. Add `Append to array variable` -action. Append created **account id** to this variable from dynamic content.
    <PAAImage src="/img/append-company-ids-variable.png" alt="Append to companyIds variable" />
1. Outside the loop, add `Get word mockdata` -action. For more information about the endpoint, see [🏢 Words](./api/words).
1. Add an `Add a new row` -action from Dataverse connector. 
1. Select `Tags` as table name.
1. Fill fields with data from the dynamic content. Adding your first value will wrap the action in a loop. 
1. Add `Append to array variable` -action. Append created tag **OData Id** to this variable from dynamic content. OData Id is needed to relate rows together in later steps.
    <PAAImage src="/img/append-tag-ids-variable.png" alt="Append to tagids variable" />
1. Outside the loop, add an `Apply to each` -action. Items parameter is going to be our generated companyIds. This means we'll loop trough those IDs.
1. Inside the created loop, add another `Apply to each` -action. Now comes some magic. In the items parameter add the following expression: `take(variables('tagIds'),rand(1,10))`. This expression takes from 1 to 10 tag IDs. This will randomize the assigning of tags a little bit, so not all accounts have all the tags.
1. Inside the nested loop, add `Relate rows` from the Dataverse connector.
1. Fill in the action as follows:
    - Table Name: `Accounts`
    - Row ID: `Current item` from `Apply to each - companyIds` loop.
    - Relationship: N:N relationship you created between Account and Tag table.
    - Relate With: `Current item` from `Apply to each - tagIds` loop.
    <PAAImage src="/img/relate-rows.png" alt="Relate rows" />

Now you are ready to run your flow. This creates 10 accounts with 1 to 10 tags attached to them. In the image below I've made some steps paraller to each other, just to fit screenshot better.
    
<PAAImage src="/img/many-to-many-workflow.png" alt="Completed many-to-many workflow" />

## Use Mockster in Microsoft Power Apps

With Power Apps, there are two options. You can prepopulate your database with Power Automate as described abowe, or you can use Mocster directly. With the latter approach you can populate galleries for example. Of course this means the data is not persisted and changes each time the gallery is reloaded. Let's get started!

1. Create a new canvas app in Power Apps.
1. Add Mockster to the app from the Data menu.
    <PAAImage src="/img/add-mockster-data.png" alt="Add Mockster" />
1. Add a gallery to the canavas from the insert menu.
1. In the gallerys `items` property add `Mockster.GetCompanies()` via the fuction row. For more information about the endpoint, see [🏢 Companies](./api/companies).
    <PAAImage src="/img/mockster-function.png" alt="Items PowerFx" />
1. In the properties pane on the right, set Layout as `Title, subtitle, and body`.
1. In the properties pane, click on the fields property to modify fields in the gallery.
1. Set values as follows:
    - Body1: `catchPhrase`
    - Subtitle1: `city`
    - Title1: `name`

<PAAImage src="/img/complete-example-power-apps.png" alt="Completed Power Apps example" />

Congratulations, now you have some data to create your UI with. Note that the data used this way is not persisted, and refreshes every time you the gallery refreshes. You can also use the seed property in Mockster, to get the same data every time. Just replace `items` property with `Mockster.GetCompanies({seed: 123})`. You may select what seed value you might like. More information about seeding in [Getting started section](./getting-started#getting-reproducible-results).