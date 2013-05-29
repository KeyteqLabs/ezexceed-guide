Extensibility
=============

## <a id="extensibility-building-a-datatype" href="#extensibility-building-a-datatype"></a> Building a FieldType for eZ Exceed

Building FieldTypes that supports the eZ Exceed interface can require a custom design implementation for eZ Exceed.
If your interface only requires basic controls like `input` fields this is supported out of the box, but if you have custom interaction in your FieldType you are required to implement this in a custom `ezexceed` design.

### Boilerplate markup

In your `content/datatype/edit/mytype.tpl` you can wrap your code in a `<div>` like this in order to instruct eZ Exceed to load a JavaScript module:

```markup
<div class="attribute-base"
    data-handler='mytype/main'
    data-paths='{
        "mytype" : "/extension/mytype/design/ezexceed/javascript/"
    }'
    data-url-root='{"/"|ezurl("no")}'>

<!-- My attributes markup -->

</div>
```

The previous code basically instructs *eZ Exceed* to load a JavaScript module named `mytype/main.js` using **Require.js**.
We will get to how you need to implement this JavaScript module in a second.

### Boilerplate JavaScipt

We build JavaScript modules for eZ Exceed using **Backbone.js** and your **handler** needs to extend/quack like the module `edit/datatypes/base`:

```javascript
define(['edit/datatypes/base'], function(Base)
{
    return Base.extend({
        render: function() { return this; },
        parseEdited: function() { return []; }
    });
});
```

There are two methods you must implement to ensure your handler will work:

#### render

This method will be called when it's time for your GUI to display itself.

#### parseEdited

This method is called when autosave is triggered for your Field, and it needs to return exactly what should be sent to the `content/save` module in eZ Publish.



### Using the stack

### Saving data

## <a id="extensibility-creating-an-app" href="#extensibility-creating-an-app"></a> Creating an app

## <a id="extensibility-apis" href="#extensibility-apis"></a> APIs
