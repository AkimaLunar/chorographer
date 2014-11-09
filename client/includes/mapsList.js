Template.mapsList.helpers({
	places: function(){
		return Places.find({}, {sort: {submitted: -1}});
	}
});