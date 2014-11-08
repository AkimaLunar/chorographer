Books = new Mongo.Collection('books');

Session.setDefault('searching', false);

Tracker.autorun(function() {  
  if (Session.get('query')) {
    var searchHandle = Meteor.subscribe('booksSearch', Session.get('query'));
    Session.set('searching', ! searchHandle.ready());
  }
});

Template.body.events({  
  'submit form': function(event, template) {
    event.preventDefault();
    var query = template.$('input[type=text]').val();
    if (query)
      Session.set('query', query);
  }
});

Template.body.helpers({  
  books: function() {
    return Books.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});