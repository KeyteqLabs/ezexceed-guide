Site configuration
==================

## Content classes

### Content class icons

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
