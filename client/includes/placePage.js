Template.placePage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },
  formattedName: function() {
  	return encodeURIComponent(this.name);
  }
});

Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  }
});

Template.commentSubmit.events({
	'submit form': function(e, template) {
	e.preventDefault();

	var $body = $(e.target).find('[name=body]');
	var comment = {
		body: $body.val(),
		postId: template.data._id
	};

	Meteor.call('commentInsert', comment);
	}
});