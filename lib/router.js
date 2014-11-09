Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { return Meteor.subscribe('places'); }
});

Router.route('/', function() {
	this.render('searchBox', {to: 'top'});
	this.render('mapsList');
});