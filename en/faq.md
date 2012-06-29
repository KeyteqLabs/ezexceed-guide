Frequently asked questions
==========================

## I cant see my changes without publishing

This most likely implies you ar running eZ Publish 4.6 where previews of unpublished
content is not supported

## TinyMCE breaks from time to time in Internet Explorer

This could be due to the awkward bug in IE where only 30 stylesheets can be loaded,
and any stylesheets more than that will silently not load.
The simplest way to get around this is to enable the packer in `ezjscore`

Turn on this in `settings/override/ezjscore.ini.append.php`

```ini
<?php /* #?ini charset="utf-8"?

[eZJSCore]
Packer=enabled

[Packer]
AppendLastModifiedTime=enabled
```
