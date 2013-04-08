Frequently asked questions
==========================

## I cant see the changes even though I've published

1. Very often this is because a site is configured with two translation languages where one is the default used for editing,
  and the other is the one actually displayed! Ensure you are editing the correct translation, and if both languages are not used,
  make sure it is removed from the installation.
2. If **#1** did not work, the issue is often cache blocks that are overly eager.

## My jquery plugins are gone / my jquery is overwritten

This is due to how Exceed supports the `ezie` extension. Specify your jquery dependency through `ezjscore` and the
`ezjsc::jquery` loading strategy to solve this.

```ini
[eZJSCore]
ExternalScripts[jquery]=://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js
```

```jade
{ezscript_require(array('ezjsc::jquery'))}
```

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
