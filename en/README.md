Table of Contents
=================

## Site setup

* [Setup the site's content](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/content-setup.md)
* [User permissions](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/permissions.md)

### Siteaccesses

It is recommended to hide, preferrably remove, any non essential siteaccesses.
For instance, the admin siteaccesse should not be listed in the siteaccess list.
Make sure you reset and properly set this in your `settings/siteaccess/<siteaccessname>/site.ini.append.php`;

```ini
AvailableSiteAccessList[]
AvailableSiteAccessList[]=<mainsiteaccess>
```

This should be sufficient in the majority of cases.

## Site development

* [Enable direct manipulation](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/direct-manipulation.md)
* [Custom datatypes and eZ Exceed](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/developer/custom-datatypes.md)
* [FAQ](https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/faq.md)
