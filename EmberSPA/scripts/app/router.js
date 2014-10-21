/// <reference path="../../ember.debug.js" />
/// <reference path="../app.js" />
App.Router.map(function() {
    this.resource('app', function () {
        this.route('home');
    });
});
