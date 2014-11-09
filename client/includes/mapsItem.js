Template.mapsItem.events({
	"click .delete": function(){
		Meteor.call("deleteMap", this._id);
	}
});