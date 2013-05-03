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


## URL for previewing of user drafts
In order to make it possible for anonymous users or non-administrators to preview a user's draft, users must have access to eZ Exceed's preview module. The following INI setting must also be set in order to make it work:

```ini
[eZExceedPushNotification]
ID=<youruniqueid>
SignKey=<youruniquesignkey>
```

Contact Keyteq to get your signkey.

### TODO: Merge the PUSH info from https://github.com/KeyteqLabs/ezexceed-guide/blob/master/en/INSTALL.md here (rewrite previous block)
