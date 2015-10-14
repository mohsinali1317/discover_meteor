/**
 * Created by mohsin on 10/14/2015.
 */
Template.comment.helpers({
    submittedText: function() {
        return new Date(this.submitted).toString();
    }
});