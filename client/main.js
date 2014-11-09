if (Meteor.isClient) {
	window.onload = function(){
	Template.body.rendered = function(){
		var autocomplete = new google.maps.places.Autocomplete(
			(document.getElementById('autocomplete')),{
				types: ['establishment']
		});

		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			var place = autocomplete.getPlace();
			Meteor.call("addPlace", place);
		});
	};
	};
}