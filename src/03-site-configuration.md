Site configuration
==================

## <a id="site-configuration-content-types" href="#site-configuration-content-types"></a> ContentTypes

### Clean up

Only keep the ContentTypes relevant for your site. Either move the ones you don't use out of the ContentTypeGroup *Content*, or delete them altogether. Less complexity gives better usability and thus faster editing.

### Separate technical and editable ContentTypes

Put content you want the editor to be able to edit inside the ContentTypeGroup *Content* – it will then get a more prominent place in the design. Put ContentTypes that are used in a technical manner, for settings or otherwise, inside a ContentTypeGroup of its own to hide it. This makes for a clearer interface for the editor.

### ContentType icons

In order to make it even easier to identify the different ContentTypes and tell them apart, assign unique icons to them. Unique icons for each ContentType makes for a much clearer interface, and editors will be more efficient if you set an icon, so please do.

Create or edit `icon.ini`:

```ini
[ClassIcons]
ClassMap[recipe]=Food.png
ClassMap[cookbook]=Book.png
ClassMap[pin]=Pushpin.png
```

[Full overview of the available icons](03/01-icons-available.md).

## <a id="site-configuration-field-definition-setup" href="#site-configuration-field-definition-setup"></a> FieldDefinition setup

### Naming

Take care in naming FieldDefinitions, descriptions and states. Make it crystal clear and easy to understand. This makes up a good part of the experience – make it great.

### Righty tighty

In order to make the Content edit layout tighter and more user friendly, consider editing `contenteditor.ini.append.php` inside the eZ Exceed extension to make many or most of the FieldDefinitions use only half of the available width and thus render side by side other less space consuming FieldDefinitions:

```ini
[ByType]
fieldid=half

# or

[ByClassIdentifier]
contentclass[fieldname]=half
```

### Order of FieldDefinitions

Make the attributes order follow the order it displays on the page. E.g a footer text FieldDefinition should reside at the bottom of the edit area, if it sits at the bottom of the page. This is called 'cognitive mapping' and makes it easy for the editor to relate to the Content she's editing.

### Make use of FieldDefinitionGroups

Group FieldDefinitions (e.g meta information) enabling the editor to open or close a group of FieldDefinitions. Another example for grouping is global attributes, e.g footer information, or other static information. You can create FieldDefinitionGroups in `content.ini`.

## <a id="site-configuration-text-editor" href="#site-configuration-text-editor"></a> Text editor

### Typeface

Change the default typeface inside the text editor to the same typeface used in the site's design. To do this, override `content.css` inside the TinyMCE iframe. This creates a better connection between the site being edited and the edit area.

### eZ Exceed improved link

eZ Exceed provides a better way to link to *Locations* – not only *Contents*. This is an editor plugin, and needs to be activated in the override settings, in `ezoe.ini`:

```ini
[EditorSettings]
Plugins[]=ezexceedlink

[EditorLayout]
Buttons[]=ezexceedlink
```

## <a id="site-configuration-preview-url" href="#site-configuration-preview-url"></a> Shareable preview URLs
In order to make it possible for anyone to preview a user's draft, the desired groups of users must be granted access to eZ Exceed's preview module. The following INI setting must also be set in order to make it work:

```ini
[eZExceedPushNotification]
SignKey=<yoursignkey>
```

[Contact Keyteq](mailto:support@keyteq.no "Send email to support@keyteq.no") to obtain your SignKey.

## <a id="site-configuration-push-notifications" href="#site-configuration-push-notifications"></a> Push notifications for [the eZ Exceed iOS app](https://itunes.apple.com/app/id567405821 "Exceed at iTunes App Store")

To be able to send Push Notifications to the users' iOS devices, you need both an ID and a SignKey. [Contact Keyteq](mailto:support@keyteq.no "Send email to support@keyteq.no") to obtain this info.

Create or edit `ezexceed.ini` in the level that suit your needs best – override or siteaccess. Add the following block:

```ini
[eZExceedPushNotification]
SignKey=<yoursignkey>
ID=<yourid>
```
