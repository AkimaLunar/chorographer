Meteor.publish('places', function() {
  return Places.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});