if (Meteor.isClient) {
	Template.searchBox.rendered = function(){
		window.onload = function(){
			var autocomp = new google.maps.places.Autocomplete(
			(document.getElementById('autocomplete')),{types: ['establishment'] }
			);

			//Session.set("map", autocomplete.getPlace());
		};

	};

	

	Template.body.helpers({

  });
}

if (Meteor.isServer) {
  
}