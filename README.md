The List app
=========

The List app is a project just to practice with [AngularJS] and Git.

Tech
-----------

The List app uses a number of open source projects to work properly:

#### Client
* [Twitter Bootstrap] - don't want to write my own CSS
* [jQuery] - just a little part of it
* [Bower]
* [Grunt]
* [Karma]

#### Server
* [node.js]
* [Express]
* [Mongoose]

Installation
--------------

```
git clone git@github.com:KonanMentor/List.git list
cd list
```

Make sure that [node.js] is installed

#### Server installation

```
cd server
npm i
```
[MongoDB] needs to be installed

#### Client installation

Following npm packages should be installed globally
* bower - to load necessary javascript libraries
* grunt-cli - to build client from console
* karma-cli - for testing from console

```
npm install bower grunt-cli karma-cli -g
```

Install necessary packages and load javascript libraries
```
cd client
npm i
bower i
```

Testing
----
Make sure that *karma-cli* is installed globally

To run tests fast use [PhantomJS]. Install it and [set] PHANTOMJS_BIN variable.

#### Client testing
Move to *client* directory and run
```
karma start --single-run
```

Running
------------
#### Start the server
* Run MongoDB
* Go to *server* directory and run `node server.js`

It should print
```
Server run on port 8888
Connected to DB!
```

If it prints
```
Server run on port 8888
DB connection error: failed to connect to [localhost:27017]
```

Then check if MongoDB is launched.

#### Start the client
Install *http-server*
```
npm i http-server -g
```
* Go to *client* directory and run `grunt build`
* Open *src* and run `http-server -p 2000`
* Open [http://localhost:2000]

[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express]:http://expressjs.com
[MongoDb]:http://www.mongodb.org/downloads
[Mongoose]:http://mongoosejs.com/
[Grunt]:http://gruntjs.com/
[Bower]:http://bower.io/
[Karma]:http://karma-runner.github.io/
[AngularJS]:https://angularjs.org/
[npm]:https://www.npmjs.org/
[http://localhost:2000]:http://localhost:2000
[Python 3]:https://www.python.org/downloads/
[set]:http://karma-runner.github.io/0.8/config/browsers.html
[PhantomJS]:http://phantomjs.org/
