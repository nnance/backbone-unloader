backbone-unloader
====================

[![npm version](https://badge.fury.io/js/backbone.unloader.svg)](http://badge.fury.io/js/backbone.unloader)
[![Build Status](https://secure.travis-ci.org/nnance/backbone-unloader.png?branch=master)](http://travis-ci.org/nnance/backbone-unloader)
[![Dependency Status](https://gemnasium.com/nnance/backbone-unloader.svg)](https://gemnasium.com/nnance/backbone-unloader)

Dynamically load and unload Backbone routes.  Which provides the ability to:
* Limit access to routes based on user rights
* Can be triggered based on events like signoff/signon

## Getting Started

Install with bower.  If you haven't used [bower](#http://bower.io) before, be sure to check out the [Getting Started](http://bower.io/#getting-started) guide, as it explains how to install Bower and install bower packages. Once you're familiar with that process, you may install this plugin with this command:
```
bower install backbone.unloader --save
```
## Documentation

Backbone.Unloader extends the Backbone.Router to provide away to dynamically load an unload routes.  It can be included in an application in the following ways:

### AMD or CommonJS

```
var Backbone = require('backbone');
var unloader = require('unloader');

var router = new Backbone.Router();
```

### Global
```
var router = new Backbone.Router();
```

### Loading Routes
Routes can be loaded dynamically based on an event or a condition.

```
var router = Backbone.Router.extend({
  initialize: function(session){
    session.on('login', function(){
      this.loadRoutes({
        'home': 'showHome',
        'user/:id': 'showUser'
      });

    }.bind(this));
  }
});
```

### Unloading Routes
Routes can be unloaded dynamically

```
var router = Backbone.Router.extend({
  initialize: function(session){
    session.on('logoff', function(){

      this.unloadRoutes();

    }.bind(this));
  }
});
