Extensibility
=============

## <a id="extensibility-building-a-datatype" href="#extensibility-building-a-datatype"></a> Building a FieldType for eZ Exceed

Building FieldTypes that supports the eZ Exceed interface can require a custom design implementation for eZ Exceed.
If your interface only requires basic controls like `input` fields this is supported out of the box, but if you have custom interaction in your FieldType you are required to implement this in a custom `ezexceed` design.

### Boilerplate markup

First you need to map your JavaScript namespace for AMD modules in `ezexceed.ini.append.php` like this:

```ini
[AMD]
NS[myextension]=/extension/myextension/design/ezexceed/src
```

In your `content/datatype/edit/mytype.tpl` you can wrap your code in a `<div>` like this in order to instruct eZ Exceed to load a JavaScript module:

```markup
<div class="attribute-base"
    data-handler='myextension/main'
    data-url-root='{"/"|ezurl("no")}'>

<!-- My attributes markup -->

</div>
```

The previous code basically instructs *eZ Exceed* to load a JavaScript module named `mytype/main.js` using **Require.js**.
We will get to how you need to implement this JavaScript module in a second.

### Boilerplate JavaScipt

We build JavaScript modules for eZ Exceed using **Backbone.js** and your **handler** needs to extend/quack like the module `edit/datatypes/base`:

```javascript
define(['shared/datatype'], function(Datatype)
{
    return Datatype.extend({
        render: function() { return this; },
        parseEdited: function() { return []; }
    });
});
```

See its [API-documentation](#extensibility-api-shared)

## <a id="extensibility-creating-an-app" href="#extensibility-creating-an-app"></a> Creating an app

It is possible to create custom **apps** that will reside in the toolbar. This can range from a simple app that loads some content into the stack,
to complete JavaScript applications running in eZ Exceed.
This section will quickly walk you through building simple applications.

### Configuring the application

All configuration happens through overriding `ezexceed.ini` on a pr app/button level.
This example will render a popover once clicked, this popover will contain an iframe including our twitter widget.
You can see this code in the [ezexceed-examples](https://github.com/KeyteqLabs/ezexceed-examples) repository.

```ini
[Toolbar]
Buttons[]=twitter

[Toolbar_twitter]
Name=Tweets
Icon=Share
URL=/extension/ezexceed-examples/design/ezexceed/lib/twitter/widget.html
Type=popover
```

Lets look at the configuration keys:

* `Name` This is the name that will be used in the toolbar as well as the popover/stack heading
* `Icon` Refers to the file name of a Helveticon. This Icon will be used in the toolbar + in the stack
* `URL` Any URL that will work and serve up content to an iframe will work here. Static html, ez modules or external services.
* `Type` You can choose between *stack* and *popover* depending on how much space your content requires.
* `Module` Optional key that allows you to specify an AMD JS module that will be loaded and used. This requires more work on your part while also offers full flexibility.

### Configuring an advanced application

```ini
[AMD]
NS[ezexceed-examples]=/extension/ezexceed-examples/design/ezexceed/src

[Toolbar]
Buttons[]=clouds

[Toolbar_clouds]
Name=Clouds
Icon=Cloud
Module=ezexceed-examples/clouds
```

### Writing a basic JavaScript module

eZ Exceed JavaScript modules are really just [AMD modules](https://github.com/amdjs/amdjs-api/wiki/AMD) loaded by [Require.js](http://requirejs.org).
The gist of it is that the `ezexceed-examples/clouds` module will be resolved to `/extension/ezexceed-examples/design/ezexceed-examples/javascript/clouds.js`,
and this file is in turn supposed to serve up a valid Module by using the `define()` function, like this:

```javascript
define(['backbone', 'jquery-safe'], function(Backbone, $)
{
    return Backbone.View.extend({
        render: function()
        {
            this.$el.html('Hello world');
            return this;
        }
    });
});
```

As you can see, the module takes a set of dependencies and in the callback it simply returns a `Backbone.View` _class_ that eZ Exceed in due time will render into the configured container (stack/popover).
You should check out the [Backbone.js documentation](http://backbonejs.org) for more information on Backbone, most things you want will be specifics to Backbone.
Read on to get to what sort of APIs eZ Exceed itself provides to make your life simpler.

## <a id="extensibility-apis" href="#extensibility-apis"></a> APIs

These are the openly shared APIs you can use in your application

### <a id="extensibility-api-stack" href="#extensibility-api-stack"></a> Stack

#### push(`view`, `options`, `context`)

Push a view constructor that will be rendered as a new stack item.

```javascript
var options = {
    render: true
};
var context = {
    heading: 'My Stack item',
    icon: 'Cloud'
};
eZExceed.stack.push(Backbone.View, options, context);
```

The **options** argument will be passed as the options object to Backbone.View. Notice that the following values are overriden:

* `el` This will be the stack item your view can fill
* `heading` A reference to the heading text element so you can update it

The **context** argument contains data that will be sent into the stacks template that initally renders its header. It supports the following keys:

* `heading` Text string that will be translated from the `eze` context, and then set as heading
* `icon` Is a filename, without fileending, being one of the included Helveticon icons.
* `autosave` You can disable the autosave control that by default is rendered and active in the heading. Setting this to false will make sure autosave can't happen in your stack item.

#### pop([`arg`, ...])

Pop the current stack item, in time showing the underlying item.
Notice that its possible to pass an arbitrary number of arguments to pop, this will make those arguments propagate into any event listeners for the pop.
By default, when passing zero arguments, the `this.model` of the view will be sent.

You would normally use `pop` inside a view if some action should force it to close from within.

### eZExceed.stack Events

There are two events you can listen to:

#### destruct

Called when a view destructs, this can be handy when you push a helper view to for example make a selection, and need to pass values back from that view:

```javascript
// Inside View#1
var context = {heading:'Make a selection',icon:'Select'};
var selectView = eZExceed.stack.push(SelectionView, {render:true}, context);
selectView.once('destruct', this.saveSelection);
```

#### push

You can also listen to new views getting pushed on the stack in general.

```javascript
eZExceed.stack.on('push', doSomething);
```

### <a id="extensibility-api-shared" href="#extensibility-api-shared"></a> Shared classes

eZ Exceed provides a bunch of javascript classes you can inherit from to both speed up development as well as making sure everything looks and feels good.
There are move goodness under `shared/` but you should refrain to use anything that is not documented as the APIs aren't entirely stable.

#### shared/view

Instead of using Backbone.View directly, you should always default to using this view as your base.
It provides some conveniences:

* `click` events are translated to fast taps on touch devices
* You get [backbone.keys](http://nervetattoo.github.io/backbone.keys/) enabled on desktops
* You can more easily render the Exceed loader by using the _loader method: **this._loader(options)**
* Hiding/showing the entire element is done by `this.hide()` and `this.show()`, or for sub elements by passing them as argument.

#### shared/datatype

This is the view you should inherit for creating FieldType interface handlers
If your fieldtype consists of just textboxes, this default implementation should suffice, but if its more complex you need to override.

Methods:

##### render

This method will be called when it's time for your GUI to display itself.
Make sure you return `this` for chaining support.

##### parseEdited

This method is called when autosave is triggered for your Field, and it needs to return exactly what should be sent to the `content/save` module in eZ Publish.
Looking at the **objectrelationlist** FieldType explains how we can save something more complex:

```javascript
parseEdited : function()
{
    var values = [];

    // Helper to create the name of the <input> attribute with pre/postfix
    var inputName = this.buildName('data_object_relation_list');

    if (this.collection.length > 0) {
        // Return an object for each id:
        // {...data_object_relation_list... : id}
        // Which will be an array [obj,obj,obj]
        values = this.collection.map(function(model)
            {
                //return model.id;
                var obj = {};
                obj[inputName] = model.id;
                return obj;
            });
    }
    else {
        // Theres a special syntax for empty values
        var value = {};
        value[inputName] = 'no_relation';
        values = [value];
    }
    return values;
}
```

#### shared/selectable

Turn any select box into an upgraded version:

```javascript
define(['shared/view', 'shared/selectable'], function(View, selectable) {
    return View.extend({
        render: function() {
            selectable(this.$('select'));
            return this
        }
    });
});
```

#### shared/funky

A fp utilty library for writing functional code:
Consider these examples:

```javascript
// Truthy
locations.filter(Funky.truthyProp('canCreate'));

// Equality
locations.filter(Funky.equalProp('id', this.subtree.id));

// Toggling
this.mutable = false;
var toggle = Funky.toggleProp('mutable');
toggle(); // true
toggle(); // false
```
