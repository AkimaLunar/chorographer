GoogleMaps.init({
  'sensor': false,
  'key': 'AIzaSyCJuGapiMUeZt0NHKILcFj5tC10uACna1E',
  'language': 'en',
  'libraries': 'places'
});

Template.searchBox.rendered = function(){
		window.onload = function(){
			var autocomp = new google.maps.places.Autocomplete(
			(document.getElementById('autocomplete')),{types: ['establishment'] }
		);
	};
};