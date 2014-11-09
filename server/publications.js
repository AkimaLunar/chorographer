Meteor.publish('places', function() {
  return Places.find();
});


Meteor.methods({
  addPlace: function (place) {
  	console.log(place);
		Places.insert({
      name: place.name,
		  address: place.formatted_address,
		  center: place.geometry.location.k + ',' + place.geometry.location.B
	    }); 
	  }
});