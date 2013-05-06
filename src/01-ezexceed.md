eZ Exceed
=========

## <a id="introduction" href="#introduction"></a> Introduction

A fresh and modern CMS interface built on top of eZ Publish

## <a id="license" href="#license"></a> License

## <a id="download" href="#download"></a> Download
[Download from GitHub](https://github.com/KeyteqLabs/ezexceed "eZ Exceed at GitHub")

## <a id="concepts" href="#concepts"></a> Important concepts

There are a few important concepts in eZ Exceed you need to grasp in order to use it, implement for it and customise it.

Our core principles are

* Touch first
* Stay in context
* Forward-leaning

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
For example clicking *Add location* pushes a *Sitemap* UI and it returns one, or several `locationId`.
