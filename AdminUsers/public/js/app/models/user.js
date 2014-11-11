var Backbone = require('backbone');
var DB       = Backbone.DB;

module.exports = Backbone.Model.extend({
  url: 'URL',

  idAttribute: "_id",

  defaults: {
    username:   'N/A',
    first_name: 'N/A',
    last_name:  'N/A'
  },

  initialize: function ( ){
    console.log('Instancia del Modelo Usuario');

    this.on('change', function (model) {
      console.log('change');
    });

    this.on("invalid", function (model, err){
      console.log('invalid');
      console.log(model);
      console.log(err);
    });

  },

  validate: function (attrs) {
    /*
      return true  = Error
             false = Success
    */
  },

  parse: function(response, options) {
  },

  save: function () {
    var response = { status: 400, message: '' };
    if(this.isNew()){
      var model = this.toJSON();
      var user = DB.users.insert(model);
      if(user){
        response = { status: 200, user: user };
        return response;
      }
    }else{

    }
  },

  fetch: function () {
    var response = { status: 400, message: '' };
    var id = this.idAttribute;
    if(this.has(id)){
      var user = DB.users.get(this.get(id));
      if(user){
        response = { status: 200, user: user };
        return response;
      }
    }
    return response;
  }

});
