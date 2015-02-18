/*!
* backbone.unloader.js
* Copyright 2014, Nick Nance (@nancenick) and ConnectSolutions (@ConnectSolutns)
* backbone.unloader.js may be freely distributed under the MIT license.
*/
(function (factory) {

  // Check for AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'backbone'], factory);
  }

  // Next for Node.js or CommonJS.
  else if (typeof exports === 'object') {
    factory(require('underscore'), require('backbone'));
  }

  // Finally, as a browser global.
  else {
    factory(_, Backbone);
  }

}(function (_, Backbone) {
  _.extend(Backbone.Router.prototype, {
    loadRoutes: function(routes) {
      if (this.routes) {
        this.unloadRoutes();
      }
      // set backbone internal routes variable
      this.routes = routes;
      // call backbone internal route binding function
      this._bindRoutes();
    },

    unloadRoutes: function() {
      if (this.routes) {
        var routes = _.keys(this.routes);
        // turn each route into a regex expression to match what is in the handlers
        routes.map(function(route){
          if (!_.isRegExp(route)) {
            route = this._routeToRegExp(route);
          }
          return route;
        }.bind(this))
        // find each router in the handlers and remove it
        .forEach(function(route){
          var routeIndex = _.findIndex(Backbone.history.handlers, function(handler){
            return handler.route.toString() === route.toString();
          });
          Backbone.history.handlers.splice(routeIndex,1);
        });
        this.routes = null;
      }
    }

  });
}));
