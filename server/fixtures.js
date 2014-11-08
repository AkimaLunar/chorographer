Meteor.startup(function () {
  if (Places.find().count() === 0) {
    Places.insert({
      name: 'Boba Guys',
	  address: '3491 19th St San Francisco, CA 94110',
	  center: '37.760732,-122.421202'
    });
  }
});