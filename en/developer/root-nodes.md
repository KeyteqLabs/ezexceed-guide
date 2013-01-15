Root nodes [eZExceedSiteMap]
========================

All examples are to be set in `ezeexceed.ini`
You can override what root nodes are used in the Sitemap of eZ Exceed.
For example you can set the global root node that is always used for the **Content** part:

```ini
[eZExceedSiteMap]

RootNode=2
```

## When adding object to a Page

This is the default behaviour:

```ini
[eZExceedSiteMap]

ClassRoot[user]=5
```

But you can add other content classes default root nodes as you see fit.
