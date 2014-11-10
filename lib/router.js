Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('places'); }
});

Router.route('/', function() {
	this.render('searchBox', {to: 'top'});
	this.render('mapsList');
});