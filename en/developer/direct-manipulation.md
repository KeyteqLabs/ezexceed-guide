Direct manipulation
===================

### Current status: _draft_

## Object or object list level

If you have fetched an object or object list you can tell eZ Exceed to render
a pencil for it so the user easily can initiate editing each of the objects.
Use this template operator in both cases; `{$object|pencil}` or `{$objectList|pencil}`

## Attribute level

eZ Exceed supports enabling direct manipulation of single attributes for logged in user.
This is by default enabled for the `ezxmltext` attributes but you can enable this on other
attributes as well.
In order to enable this you must override the view template for a datatype, for example
the template `content/datatype/view/ezstring.tpl`

What is needed is this kind of markup:

```html
<div class="update-on-edit" data-id="{$attribute.id}">
	{$attribute|exceed_editable}
	<span class="inner">
		{$attribute.content.output.output_text}
	</span>
</div>
```

The important line here is the `{$attribute|exceed_editable}`, the markup wrapping it
just makes sure the DOM itself is updated after save.
The `exceed_editable` operator can be used anywhere you have an attribute, so it does
not have to be in a datatypes view template.

## eZFlow block level

By default eZ Exceed enables dark grey pencils for every eZFlow block on your page.

## eZFlow custom zones

If you use eZ Flow in your project and want to define custom zone templates
you need to ensure that the blocks still get pencils.

Normally ezflow implements block rendering in all zones by using a shared
template (`parts/zone_block.tpl`) that looks like this:

```smarty
{if and( is_set( $zones[0].blocks ), $zones[0].blocks|count() )}
{foreach $zones[0].blocks as $block}
    {include uri='design:parts/zone_block.tpl' zone=$zones[0]}
{/foreach}
{/if}
```

The ideal approach for future proofing is to reuse this template, but as it has a tiny bit of markup
that you might find not desirable you might want to completely roll your own.

If you do so you need to continue including the _top_ and _bottom_ templates as this does.
Write your template like this and you will still have pencils:

```smarty
{include uri='design:parts/zone_block_top.tpl'}

<!-- My awesome block markup here -->

{include uri='design:parts/zone_block_bottom.tpl'}
```
