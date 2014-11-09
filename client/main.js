if (Meteor.isClient) {
	
	Template.body.rendered = function(){
		
		GoogleMaps.init({
		  sensor: false,
		  key: 'AIzaSyCJuGapiMUeZt0NHKILcFj5tC10uACna1E',
		  language: "en",
		  libraries: "places"
		}, function() {
			
			var autocomplete = new google.maps.places.Autocomplete(
				(document.getElementById('autocomplete')),{
					types: ['establishment']
			});

			google.maps.event.addListener(autocomplete, 'place_changed', function() {
				var place = autocomplete.getPlace();
				Meteor.call("addPlace", place);
			});

		});
		
	};
}