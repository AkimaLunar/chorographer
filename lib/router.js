Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('places'), Meteor.subscribe('comments'); }
});

Router.route('/', function() {
	this.render('searchBox', {to: 'top'});
	this.render('mapsList');
});

Router.route('/places/:_id', {
  name: 'placePage',
  data: function() { return Places.findOne(this.params._id); }
});