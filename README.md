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

[node.js] + [npm] should be installed

```
git clone git@github.com:KonanMentor/List.git list
cd list
```

#### Server installation

```
cd server
npm i
```
[MongoDB] needs to be installed

#### Client installation
```
cd client
npm i
bower i
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
[Python 3] should be installed
* Go to *client* directory and run `grunt build`
* Open *src* and run `python -m http.server 2000`
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