Custom datatypes
================

Building custom datatypes that works great with eZ Exceed requires some extra
steps. This is even more true the more complex the datatype is.

## The edit template basics

The first thing you must do is making sure your datatype is wrapped in a container used for bootstrapping the client side interactions.

```smarty+html
<div class="attribute-base" data-attribute-base="{$attribute_base}" data-id="{$attribute.id}"
	data-handler='MyNamespace.views.MyHandler'>
<!-- My attributes real markup -->
</div>
```

By specifying the `data-handler` attribute you map this to a JavaScript Backbone view
that will handle the attribute.

## Skip autosave triggering on input fields

Some fields doesn't need to trigger autosave. This can be turned off on a per-element
level like this:

```html
<input type="text" data-autosave="off" />
```

## The JavaScript attribute handler

You should extend a base view that eZ Exceed provides, and implement a few methods
to have your JavaScript pick up handling:

```javascript
MyNamespace.views.MyHandler = eZExceed.ContentEditor.Base.extend(
{
	// If you define an initialize method you must make sure you call
	// this.init(options) to set this.base and this.id
	initialize : function(options)
	{
		this.init(options);
	},

	// This method is called when autosave triggers
	// and must return the data that should be set on this attribute
	// `name` should be something like *ContentObjectAttribute_ezstring_data_text_200*
	// You can get a hold of the `base` for the attribute and `id`
	// as properties on this
	parseEdited : function(node)
	{
		return [
			{
				name : this.base + '_text_' + this.id,
				value : 'value'
			}
		];
	}
}
```
