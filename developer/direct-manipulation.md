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
