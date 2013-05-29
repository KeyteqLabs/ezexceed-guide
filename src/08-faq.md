Frequently Asked Questions
==========================

## <a id="frequently-asked-questions-editors" href="#frequently-asked-questions-editors"></a> Editors

### I can't see any changes even though I have published them. Why?

Very often this is because a site is configured with two translation languages where one is the default used for editing, and the other is the one actually being displayed. Ensure you are editing the correct translation, and if both languages are not used, make sure it is removed from the installation.

If this doesn't solve your problem, overly eager cache blocks are often to blame.

### I can't see my changes without publishing. Why?
This most likely implies you are running eZ Publish 4.6 where previews of unpublished content is not supported


## <a id="frequently-asked-questions-developers" href="#frequently-asked-questions-developers"></a> Developers

### I followed all the steps to install eZ Exceed, but the toolbar isn't showing up. Why?
Ensure that your pagelayout template is rendering the toolbar. This is only necessary if you are overriding with your own custom pagelayout (eZ Publish 4.x) or if you are running eZ Publish 5.x.

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
  
Also, your editor users need the right set of permissions and policies. We do not require any special permissions over what eZ Publish would normally require, but do make sure the settings are indeed intact.

For a normal editor you should assign the following permissions:

- `content/create`
- `content/edit`
- `content/manage_locations`
- `ezoe/edit`

This should be sufficient for normal everyday use. For the best possible experience, permissions for `content/create` and `content/edit` should be limited to a specific *subtree*, as well as a limited subset of ContentTypes the group in question should be able to edit.

If you are going to be using the Shareable preview URLs feature, make sure to also grant the desired user groups the following policy:

- `ezexceed/preview`

### My jQuery plugins are gone / jQuery is overwritten. Why?

This is due to how eZ Exceed supports the `ezie` extension. Specify your jQuery dependency through `ezjscore` and the
`ezjsc::jquery` loading strategy to solve this.

```ini
[eZJSCore]
ExternalScripts[jquery]=://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js
```

```smarty
{ezscript_require(array('ezjsc::jquery'))}
```

### TinyMCE breaks from time to time in Internet Explorer. Why?

This could be due to an awkward bug in IE where only 30 stylesheets can be loaded, and any stylesheets more than that will silently not load. The simplest way to get around this is to enable the packer in `ezjscore`.

Turn on this in `settings/override/ezjscore.ini.append.php`

```ini
[eZJSCore]
Packer=enabled

[Packer]
AppendLastModifiedTime=enabled
```