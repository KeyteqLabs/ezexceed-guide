eZExceed INSTALL
================

Installation guide
------------------

1. Ensure dependencies are met
2. Install extension into extension/ezexceed
3. Run sql script. `mysql -h host -u user -D my-database-name -p < sql/mysql/schema.sql`
4. Activate extension pr siteaccess in site.ini

    ```ini
    [ExtensionSettings]
    ActiveAccessExtensions[]=ezexceed
    ```

5. Add `ezexceed` to the `AdditionalSiteDesignList` array in `site.ini` on the siteaccess you want ezexceed enabled

    ```ini
    [DesignSettings]
    AdditionalSiteDesignList[]=ezexceed
    ```
6. *Optional*: Ensure your pagelayout is rendering the toolbar:
    
    If you have custom pagelayouts you might need to do this to include the actual toolbar and kickstart Exceed:

    ```smarty
    {def $current_node_id=$module_result.node_id}
    {include uri="design:parts/website_toolbar.tpl"}
    ```

7. Clear cache and regenerate autoloads.
   php bin/php/ezpgenerateautoloads.php; php bin/php/ezcache.php --clear-all --purge

If you are planning on using an IE-browser older than IE 9.0, you should be aware of that we have overriden page_head_script.tpl for this purpose.

Special instructions for eZ Publish 5
-------------------------------------

eZ Publish 5 requires you to add the toolbar to your twig pagelayout file like this:

```jinja
{% ez_legacy_include "design:parts/website_toolbar.tpl" with {
    'current_node_id': app.request.attributes.get('locationId')
} %}
```

Dependencies
------------
* eZ Publish version **4.7** or higher.
  * 4.6 **might** work, but it is not a target
  * 5.x we are working on proper support for eZ Publish 5
* ezjscore **1.3.0** or higher ( http://projects.ez.no/ezjscore )
* ezwebin **1.8.0** or higher ( https://github.com/ezsystems/ezwebin )

    eZ Exceed overrides the `parts/website_toolbar.tpl` template in order to inject itself to a page.
    Thus you should continue including the toolbar as you did with the eZ Publish website toolbar.

* Apache version **1.3** or **2.x in `prefork`** mode
* PHP version **5.3** or higher, 5.4 is recommended
* Database server: Mysql 5 (UTF-8 is required)
* Supported web browsers
  * Latest Google Chrome
  * Latest Mozilla Firefox 
  * Internet Explorer 8.0 or higher.
  * Apple Safari 5.0 or higher.

   Make sure that Javascript support is enabled in your web browser.

   Note : IE 8.0 & 9.0 is only supported functionally wise, issues that only cause
           visual artifacts will not be prioritized unless its easy to fix and does
           not limit the capabilities of modern browsers.


Extensions not supported at this moment.
---------------------------------------

eZTags
    You do not have to disable the extension, but we do not support editing of the eZTag-type yet.

## Extra

### Url for previewing of drafts user drafts
In order to make it possible for anonymous users or not administrators to view a preview of a users draft, user must have access to eZExceed preview module.
The eZExceed ini setting **[eZExceedPushNotification][SignKey]** must also be set in order to make it work

### Make the content edit tighter

Edit `contenteditor.ini.append.php` inside the ezexceed extension folder to set the width of an attribute, e.g `ezbinaryfile=half`. You should do this with most of your attributes, to make the content editing view easier to use.

If you need help, come find us in #ezpublish on irc.freenode.net. Look for Haraldson or Whitefire. Issues can also be posted github.

### Push notification for eZ Exceed iPad app (coming to App Store)

To be able to push notifications to the users' iPads, you have to obtain an ID and SignKey from Keyteq. Contact support@keyteq.no to get these.

Create or edit ezexceed.ini in override- og siteaccess level. Add the following block:

```ini
[eZExceedPushNotification]
ID=your id herea
SignKey=your signkey here
```
