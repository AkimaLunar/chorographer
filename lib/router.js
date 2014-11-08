Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { return Meteor.subscribe('places'); }
});

Router.route('/', {name: 'postsList'});