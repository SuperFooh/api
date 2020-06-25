# Mongo DB - docs

## Automatic installation with msiexec.exe -  [ref](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/)
edition : **comunity** - Atention! new v4.4 documentation migrated 

check [production notes](https://docs.mongodb.com/manual/administration/production-notes/) for production deployment

1. Download [**MSI** installer](https://www.mongodb.com/try/download/community) (v4.2.8 - for this docs)  
2. Open **CMD** and position on the root directory of the installer
3. We need to install the binaries from mongo, we will place them on ``C:\Program Files\MongoDB\Server\4.2\bin.``

> For our specific Tool-kit installation install the [following](####our-dev-packages) 

### This is the **generic** way for installing the binaries in the default folder
```bash
$ msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-win32-x86_64-2012plus-4.2.8-signed.msi
```
### We could specify a different destination folder:
```bash
msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-win32-x86_64-2012plus-4.2.8-signed.msi ^
            INSTALLLOCATION="C:\MongoDB\Server\4.2\"
```
### We can also decide whether we want to install [compass](https://www.mongodb.com/products/compass) or not. Compass is the default GUI for mongo but we might want to use another alternative such as [Robo 3T](https://robomongo.org/)
```bash
msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-win32-x86_64-2012plus-4.2.8-signed.msi ^
            SHOULD_INSTALL_COMPASS="0"
```
### For more installation options:

> For 4.4 mongo toolkit documentation navigate [oficcial doc](https://docs.mongodb.com/database-tools/)

Attribute | Package Components | Notes
--- | --- | ---
ServerNoService |  [mongod.exe](https://docs.mongodb.com/manual/reference/program/mongod.exe/) | [mongod](https://docs.mongodb.com/manual/reference/program/mongod/) is the primary daemon process for the MongoDB system. **mongod.exe** is the build for the mentioned daemon
ServerService | [mongod.exe](https://docs.mongodb.com/manual/reference/program/mongod.exe/) | It installs the daemon as a Windows service 
Router | [mongos.exe](https://docs.mongodb.com/manual/reference/program/mongos.exe/) | [mongos](https://docs.mongodb.com/manual/reference/program/mongos/) is the main interface between the client program and a shared cluster (its needed for horizontal scaling with several servers running in a distribuited manner)
Client | [mongo.exe](https://docs.mongodb.com/manual/reference/program/mongo/) | provides an **interactive Javascript Shell** interface to MongoDB, used to test queries and operations directly to the Database
MonitoringTools | [mongostat.exe](https://docs.mongodb.com/database-tools/mongostat/), [mongotop.exe](https://docs.mongodb.com/database-tools/mongotop/) | **mongostat:** Provides a quick overview status of a **mongod** or **mongos** running instance. **mongotop:**   provides a method to track (on a collection level) the amount of time **a mongod instance** spend *reading* and *writing* data per-collection. Default results every 1 second. **CANNOT RUN O MONGO SHELL, ONLY ON SYSTEM CLI**
ImportExportTools | [mongodump.exe](https://docs.mongodb.com/database-tools/mongodump/), [mongorestore.exe](https://docs.mongodb.com/database-tools/mongorestore/), [mongoexport.exe](https://docs.mongodb.com/database-tools/mongoexport/), [mongoimport.exe](https://docs.mongodb.com/database-tools/mongoimport/) | **mongodump:** utility for creating a binary export. **mongorestore:** takes data from a binory like the one created with *mongodump* and place it in a *mongod* / *mongos* instance. **mongoexport:** is a **command-line tool** (i.e. should be run on cmd/bash, not on mongo shell)  that exports data into JSON / CSV format from a mongo instanceDB. **mongoimport** imports content from external Extended JSON, CSV or TSV created by *mongoimport* or another third party app.
MiscellaneousTools | [bsondump.exe](https://docs.mongodb.com/database-tools/bsondump/), [mongofiles.exe](https://docs.mongodb.com/database-tools/mongofiles/) | **bsondump:** converts BSON files into human-readable formats (e.g. JSON), its usefull for reading data returned by **mongodump** utility. **mongofiles:** let you manipulate files stored in MongoDB instances in [GridFS](https://docs.mongodb.com/manual/core/gridfs/) formats 


---

#### Our dev packages: 

```bash
msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-win32-x86_64-2012plus-4.2.8-signed.msi ^ ADDLOCAL="ServerNoService,Client,Router,MonitoringTools,ImportExportTools,MiscellaneousTools" ^ SHOULD_INSTALL_COMPASS="0"
```

---

4. create a database directory in '**C:/**'
```bash 
$ cd C:
$ mkdir -p data/db
```

5. Start mongo: run de binary where ever it was placed in the installation steps followed previously and pass the root directory where all db-related information is going to be placed. For our purposes, we are going to manage our db root directory inside **data/** with the name of **cluster**

```bash
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\cluster"
```

> For creating a shortcut to the **path** environment variable: go to *Control Panel\System and Security\System* -> **Advanced system settings** -> **Environment Variables** and add a new entry for the path variable.

**NOTE:** if the daemon doesn't remain listening, it means that we have a missing directory in the **dbpath** attribute we passed to the above script. Being that the case you the CLI should have reported it and immediately prompted for another command.

## Initialize mongoDB instance with **mongod** binary

(assuming mongod, is set on environment varibales)

 
