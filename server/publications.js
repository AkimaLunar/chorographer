Meteor.publish('places', function() {
  return Places.find();
});


Meteor.methods({
	addPlace: function (place) {
		Places.insert({
			name: place.name,
			address: place.formatted_address,
			center: place.geometry.location.k + ',' + place.geometry.location.B
		}); 
	},

	deleteMap: function(placeId){
		Places.remove(placeId);

	}
});