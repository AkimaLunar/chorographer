Template.mapsItem.helpers({
	ownPost: function() {
	    return this.userId === Meteor.userId();
	}
});

Template.mapsItem.events({
	"click .delete": function(){
		Meteor.call("deleteMap", this._id);
	}
});