Meteor.startup(function () {
  if (Places.find().count() === 0) {
    Places.insert({
      name: 'Place X',
	    address: 'San Francisco Ferry Building, San Francisco, CA, United States'
    });

    Places.insert({
      name: 'Place 2',
	    address: 'San Francisco Ferry Building, San Francisco, CA, United States'
    });

    Places.insert({
      name: 'Place 3',
	    address: 'San Francisco Ferry Building, San Francisco, CA, United States'
    });

    Places.insert({
      name: 'Place 4',
	    address: 'San Francisco Ferry Building, San Francisco, CA, United States'
    });
  }
});