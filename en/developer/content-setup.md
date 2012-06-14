Content setup
=============

## Remove unused and dummy content classes

For example, eZ Flow bundles a lot of dummy classes, if your site does not
actively use these — remove them.

## Group your content classes

Commonly used content classes should be put in the class group `content`.
Classes in this group is not sorted into folders in the interface.

Please keep more auxiliary classes in other folders; You should for example put technical
classes under a `Technical` folder.

## Easy to understand naming

The name of content classes and attributes should immediately make sense on their own.

## Write good descriptions

When attribute names in themselves are confusing, make sure you include an attribute description
that removes any confusion.

## Set icons for content classes

Along with good names for your content classes you should set distinctive icons for each one.
eZ Exceed bundles the Helveticons complete package so you have over 600 icons to chose from.
You can find previews here

### Actually overriding a class icon

Define the file `settings/icon.ini.append.php` in your extension/settings and use the
_ClassMap_ override for specific content class identifiers like this.

```ini
<?php /*
[ClassIcons]
ClassMap[book]=Book.png
ClassMap[tool]=Handtool.png
```
This examples overrides content classes `Book` and `Tool`.

See the complete [list of icon names](../../icon-names.md) or check out [helveticons.ch](http://helveticons.ch/)
for previews.
