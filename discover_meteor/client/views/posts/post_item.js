/**
 * Created by mohsin on 10/13/2015.
 */

Template.postItem.helpers({
    ownPost: function() {
        console.log(this.userId);
        console.log(Meteor.userId());
        return this.userId == Meteor.userId();
    },
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});