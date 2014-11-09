Places = new Mongo.Collection('places');

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

Places.allow({
	update: function(userId, post) { return ownsDocument(userId, post); },
	remove: function(userId, post) { return ownsDocument(userId, post); },
});

Meteor.methods({
	addPlace: function (place) {
		check(Meteor.userId(), String);

		var user = Meteor.user();

		Places.insert({
			userId: user._id,
			username: user.username,
			submitted: new Date(),
			name: place.name,
			address: place.formatted_address,
			center: place.geometry.location.k + ',' + place.geometry.location.B
		}); 
	},

	deleteMap: function(placeId){
		Places.remove(placeId);

	}
});