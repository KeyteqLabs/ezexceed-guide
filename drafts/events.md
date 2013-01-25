# Preamble

Events in eZ Exceed is a way to hook into the actions triggered in Exceed.
This draft is focused on events as a way of monitoring user actions, not as a means to interacting with Exceed programmatically.

```js
eZExceed.on('stack:push', function(view)
{
    console.log(view);
});
```

# List of events

## Anatomy

* {system}:{verb}
* {component}:{verb}

## Stack

This is priority as its required to enable user session tracking to tool slike GA, Mixpanel etc.

### stack:push

Arguments

* **path** A path string that is visible in the stack after push
* **view** The pushed view constructor
* **options** Options to construct view with

### stack:pop

* **path** The current path string
* **view** The view being popped

## Inner-component events

This is not a priority, but a look into what a complete implementation might offer.

* finder:navigate *Probably overkill*
* finder:edit
* finder:delete
* finder:create
* finder:hide
* finder:show
* finder:dnd
* finder:rootselect
* finder:upload
* finder:see
* create:show
* create:create
* edit:publish
* edit:revert
* edit:location:add
* edit:location:remove
* edit:activity:post
* edit:activity:comment
* edit:translation
* find:search
* find:filter
* find:sort
* find:mode
* find:create
* find:publish
* find:delete
* find:edit
* publish:show
* publish:publish
* activity:show
* activity:post
* activity:comment
* activity:tab
* activity:like
* activity:delete
* preview:show
* preview:timeline
* preview:mirror
* preview:preview
* preview:device:remove
* zones:editblock
* zones:removeblock
* zones:addblock
* zones:change
* zones:layout
* zones:block:add
* zones:block:remove
* zones:block
