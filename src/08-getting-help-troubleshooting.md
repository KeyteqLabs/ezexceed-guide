Getting help / Troubleshooting
==============================

## <a id="getting-help-faq"></a> Frequently Asked Questions

### I followed all the steps to install eZ Exceed, but the toolbar isn't showing up. Why?
Ensure that your pagelayout template is rendering the toolbar. This is only necessary if you are overriding your with your own custom pagelayout (eZ Publish 4.x) or if you are running eZ Publish 5.x.

#### eZ Publish 4.x:
```smarty
{include uri="design:parts/website_toolbar.tpl" current_node_id=$module_result.node_id}
```

#### eZ Publish 5.x:

```twig
{% ez_legacy_include "design:parts/website_toolbar.tpl" with {
    'current_node_id': app.request.attributes.get('locationId')
} %}
```
