Installing
==========

## Common
1. Ensure dependencies are met:
    - eZ Publish version **4.7** or higher
        - 4.6 *might* work, but it's not a target
        - We are working on proper support for eZ Publish 5
    - [ezjscore](http://projects.ez.no/ezjscore "ezjscore at eZ Projects") **1.3.0** or higher
    - [ezwebin](https://github.com/ezsystems/ezwebin "ezwebin at GitHub") **1.8.0** or higher  

    - Apache version **1.3** or **2.x** in `prefork` mode
    - PHP version **5.3** or higher, 5.4 is recommended
    - Database server: MySQL **5** (UTF-8 is required)

2. Install extension into /my/ez/extension/ezexceed

    ```
    cd /my/ez/extension
    git clone git@github.com:KeyteqLabs/ezexceed.git
    cd ezexceed
    ```

3. Run the included SQL script to add eZ Exceed specifics to your database
    
    ```
    mysql -h host -u user -D my-database-name -p < sql/mysql/schema.sql
    ```

4. Activate the eZ Exceed extension in `site.ini` for every siteaccess where you want eZ Exceed enabled

    ```ini
    [ExtensionSettings]
    ActiveAccessExtensions[]=ezexceed
    ```

5. Add the eZ Exceed extension to the list of site designs for every siteaccess where you want eZ Exceed enabled

    ```ini
    [DesignSettings]
    AdditionalSiteDesignList[]=ezexceed
    ```
