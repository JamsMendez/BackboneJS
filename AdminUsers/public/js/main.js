var App = {};

//$(document).on('ready', function () {
  App.DB     = {};
  App.Models = {};
  App.Views  = {};

  App.DB.db = new loki('databse.db');
  App.DB.users = App.DB.db.addCollection('users');

//});
var model
setTimeout(function () {
  model = new App.Models.User();
  model.set({ username: 'JamsMendez', first_name: 'Jose Angel', last_name: 'Mendez Santiago' })
  var user = model.save();
  model.set(user);

  console.log(model.toJSON());

}, 1500);
