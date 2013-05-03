On eZ Exceed touch device support
=================================

eZ Exceed is built touch first, that means it works flawlessly on touch devices as well as laptops and desktop computers.
But due to the way most ez sites are set up we can't reliably put anything in the <head> section as we need to achieve a 100% experience.

As a developer you must include our file `exceed_head.tpl` in your pagelayout for <head>

```html
<head>
{include uri="design:exceed_head.tpl"}
</head>
```
