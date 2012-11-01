Table of Contents
=================

## Site setup

* [Setup the site's content](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/content-setup.md)
* [User permissions](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/permissions.md)
* [Touch support](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/touch-support.md)

### Siteaccesses

It is recommended to hide, preferrably remove, any non essential siteaccesses.
For instance, the admin siteaccesse should not be listed in the siteaccess list.
Make sure you reset and properly set this in your `settings/siteaccess/<siteaccessname>/site.ini.append.php`;

```ini
AvailableSiteAccessList[]
AvailableSiteAccessList[]=<mainsiteaccess>
```

This should be sufficient in the majority of cases.

### Extension support

eZ Exceed support most common eZ Publish extensions, but some can create a few woes.

#### ezie

When ezie is enabled it will load a version of jquery into the global scope, this will probably make your jquery/zepto
on `$` unusable as its overwritten by this later on. In order to handle this you can override
the template `ezie/jscss.tpl` and implement it like eZ Exceed does except for the jquery inclusion.

In general we advise you to not use the `ezie` extension and instead prefer the `keymedia` extension / product for image handling.

## Site development

* [Special handling of rootNodes when adding nodes to objects](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/root-nodes.md)
* [Enable direct manipulation](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/direct-manipulation.md)
* [Custom datatypes and eZ Exceed](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/custom-datatypes.md)
* [Adding toolbar buttons](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/adding-toolbar-buttons.md)
* [FAQ](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/faq.md)
