Meteor.startup(function () {
  if (Places.find().count() === 0) {
    Places.insert({
      username: 'chorographer',
      name: 'Boba Guys',
	  address: '3491 19th St San Francisco, CA 94110',
	  center: '37.760732,-122.421202'
    });
<<<<<<< HEAD
    Places.insert({
      username: 'chorographer',
      name: 'Crossroads Cafe',
	  address: '699 Delancey St San Francisco, CA 94107',
	  center: '37.783503, -122.388871'
    });
    Places.insert({
      username: 'chorographer',
      name: 'The Butler And The Chef Bistro',
	  address: '155 S Park St San Francisco, CA 94107',
	  center: '37.781111, -122.393742'
    });
    Places.insert({
      username: 'chorographer',
      name: 'The Tipsy Pig',
	  address: '2231 Chestnut St San Francisco, CA 94123',
	  center: '37.801185, -122.439872'
    });

=======
>>>>>>> parent of 631fea3... Merge branch 'ft-search'
  }
});