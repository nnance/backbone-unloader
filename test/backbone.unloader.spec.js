describe('backbone.unloader', function(){

  describe('when creating a router', function(){
    var router;
    before(function(){
      router = new Backbone.Router();
    });
    it('should provide a loadRoutes function', function(){
      expect(_.isFunction(router.loadRoutes)).to.be.true;
    });

    it('should provide a unloadRoutes function', function(){
      expect(_.isFunction(router.unloadRoutes)).to.be.true;
    });
  });
});
