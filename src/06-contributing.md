Contributing
============

## <a id="concepts" href="#concepts"></a> Important concepts

There are a few important concepts in eZ Exceed you need to grasp in order to use it, implement for it and customise it.

Our core principles are

- Touch first
- Stay in context
- Forward-leaning

### The Stack

The main interaction pattern in eZ Exceed is the stack:

<img src="assets/img/01-stack.png" alt="The Stack">

The stack allows editors to work with layered content without leaving the initial context.
As the example screenshot shows the stack has a context path with `Sitemap -> Object edit -> Add location` and
it makes it easy to see this *breadcrumb* as well as jump in it.

The uniqueness of the stack is that everything you try to do in eZ Exceed simply opens a new level
in the stack, meaning you never leave the page and have to juggle multiple tabs to keep sane.

When an editor clicks an action inside eZ Exceed it **pushes** a stack level with some UI, and when the editor is done using that stack level
a context is passed back to the overarching stack level — the initiator — with enough data to store the users interaction.
For example clicking *Add location* pushes a *Sitemap* UI and it returns one, or several `locationId`s.

## <a id="contributing-submitting-an-issue" href="#contributing-submitting-an-issue"></a> Submitting an issue

You can submit issues in our [GitHub project](https://github.com/KeyteqLabs/ezexceed/issues), but make sure you've read our [contributor documentation](https://github.com/KeyteqLabs/ezexceed/blob/dev/CONTRIBUTING.md)

## <a id="contributing-translations" href="#contributing-translations"></a> Translations

We are very interested in simple translation pull requests to cover the most important languages:

* Spanish
* French
* German
* Italian

## <a id="contributing-patches" href="#contributing-patches"></a> Patches

Contributing with Pull Requests for bug fixes and / or new features is very welcommed, but please make sure you've read our [contributor documentation](https://github.com/KeyteqLabs/ezexceed/blob/dev/CONTRIBUTING.md).
If you are adding new, or changing existing functionality, please register this as an issue before you start coding so you
know that the patch will be accepted before you undergo a lot of work.

## <a id="contributing-technologies" href="#contributing-technologies"></a> Technologies

Technologies used in eZ Exceed include, but are not limited to:

* Backbone.js (1.0)
* Underscore.js (1.4)
* jQuery (1.9)
* jQuery UI
* moment.js
* Handlebars.js
* Require.js
