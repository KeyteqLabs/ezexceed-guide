Adding toolbar buttons
======================

eZ Exceed allows you place buttons in the toolbar just the way eZ Publish itself allows this.
However in order to make the buttons look good in Exceed you need to adhere to our markup.

Lets add a button in 2 simple steps.

1. INI files

    You need to modify, or create, `settings/websitetoolbar.ini.append.php` in your extension and make sure it contains this:


    ```ini
    [CustomTemplateSettings]
    CustomTemplateList[]=my_button
    IncludeInView[my_button]=full
    ```

2. Adding the template

    Create the template you just referred to in *1* `touch design/mydesign/templates/parts/websitetoolbar/my_button.tpl`
    And write some exceed-adhering markup:
    ```html
    <li>
	<button type="button" id="my_button">My button!</button>
    </li>
    <script type="text/javascript">
    {literal}
	var button = $('#my_button');
	button.click(function(e) {
	    alert("Awesome");
	});
    {/literal}
    </script>
    ```

This is a rather useless button, but you could tie anything you'd like to this.
Its also a bad idea to inline the javascript and you should just hook to the button in some js you include later
in the page rendering.
