Site configuration
==================

## Content classes

### Initial cleaning

Keep only the ContentTypes you need for your site. Either move the ones you don't use out of the ContentTypeGroup *Content*, or delete them altogether. This prevents the user interface from appearing bloated to the editor and makes editing faster by presenting only a few but real choices.

### Content class icons

In order to make it even easier to identify the different ContentTypes and tell them apart, assign unique icons to them. Create or edit `icon.ini`:

```ini
[ClassIcons]
ClassMap[recipe]=Food.png
ClassMap[cookbook]=Book.png
ClassMap[pin]=Pushpin.png
```

### Field definition setup

In order to make the Content edit layout tighter and more user friendly, consider editing `contenteditor.ini.append.php` inside the eZ Exceed extension to make many or most of the FieldDefinitions use only half of the available width and thus render side by side other less space consuming FieldDefinitions:

```ini
[ByType]
fieldname=half

# - or -

[ByClassIdentifier]
contentclass[fieldname]=half
```

## Shareable preview URLs
In order to make it possible for anyone to preview a user's draft, the desired groups of users must be granted access to eZ Exceed's preview module. The following INI setting must also be set in order to make it work:

```ini
[eZExceedPushNotification]
SignKey=<yoursignkey>
```

[Contact Keyteq](mailto:support@keyteq.no "Send email to support@keyteq.no") to obtain your SignKey.

## Push notifications for [the eZ Exceed iOS app](https://itunes.apple.com/app/id567405821 "Exceed at iTunes App Store")

To be able to send Push Notifications to the users' iOS devices, you need both an ID and a SignKey. [Contact Keyteq](mailto:support@keyteq.no "Send email to support@keyteq.no") to obtain this info.

Create or edit `ezexceed.ini` in the level that suit your needs best – override or siteaccess. Add the following block:

```ini
[eZExceedPushNotification]
SignKey=<yoursignkey>
ID=<yourid>
```
