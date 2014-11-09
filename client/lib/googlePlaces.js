<<<<<<< HEAD
Meteor.startup(function () {
    GoogleMaps.init({
    sensor: false,
    key: 'AIzaSyCJuGapiMUeZt0NHKILcFj5tC10uACna1E',
    language: "en",
    libraries: "places"
  });
});

window.onload = function(){
  console.log('hello from Google');

  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')),{ types: ['establishment'] }
  );

  google.maps.event.addListener(autocomplete, 'place_changed', function() {       
    var place = autocomplete.getPlace();
    Meteor.call("addPlace", place,function(error, result) {
      if (error)
        return alert(error.reason); 
    });
  });

  console.log('bye from Google');
=======
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
>>>>>>> parent of 631fea3... Merge branch 'ft-search'
};