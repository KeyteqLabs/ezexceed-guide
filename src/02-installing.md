Installing the eZ Exceed extension
==================================

## <a id="installing-common" href="#installing-common"></a> Common
1. Ensure dependencies are met:
    - eZ Publish version **4.7** or higher
        - 4.6 *might* work, but it's not a target
        - We are working on proper support for eZ Publish 5
    - [ezjscore](http://projects.ez.no/ezjscore "ezjscore at eZ Projects") **1.3.0** or higher
    - Apache version **1.3** or **2.x** in **prefork** mode
    - PHP version **5.3** or higher, 5.4 is recommended
    - Database server: MySQL **5** (UTF-8 is required)

2. Install extension into `/my/ez/extension/ezexceed`

    ```bash
    cd /my/ez/extension
    git clone git@github.com:KeyteqLabs/ezexceed.git
    cd ezexceed
    ```

    eZ Exceed is currently only available as an *extension*. If you are running on eZ Publish 5, you have to enable legacy mode and install the eZ Exceed extension in your `/ezpublish_legacy/extension/` folder.

3. Run the included SQL script to add eZ Exceed specifics to your database
    
    ```bash
    mysql -h host -u user -D my-database-name -p < sql/mysql/schema.sql
    ```

4. Activate the eZ Exceed extension along with its SiteDesign in every siteaccess where you want eZ Exceed enabled. In `siteaccess/yourdesign/site.ini.append.php`:

    ```ini
    # Activates the extension itself:
    [ExtensionSettings]
    ActiveAccessExtensions[]=ezexceed
    
    # Activate eZ Exceed's design; toolbars and overlays:
    [DesignSettings]
    AdditionalSiteDesignList[]=ezexceed
    ```

5. Clear your caches and refresh!

## <a id="installing-upgrading" href="#installing-upgrading"></a> Upgrading

You can safely upgrade your installation without experiencing any breaking changes inside of major versions.
So going from 2.0 to 2.1 should just work.
There might be breaking changes introduced when going from a 2.x to a 3.x version.

### Running from git

If you are using eZ Exceed directly from git you will notice that every version is tagged using [semver](http://semver.org/).
You can upgrade to the latest stable release by simply pulling the latest `master`

```bash
git checkout master
git pull
```

Upgrading to a specific version i.e. v2.0.0-rc.1 to v2.0.0-rc.3 can be done by checking out a specific tag

```bash
git fetch origin master
git checkout v2.0.0-rc.3
```
