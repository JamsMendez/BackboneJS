var Backbone    = require('backbone'),
    Loki        = require('lokijs'),
    $           = require('jquery');

Backbone.$  = $;
Backbone.DB = { db: new Loki('databse.db') };

$(function () {

});
