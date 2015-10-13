/**
 * Created by mohsin on 10/13/2015.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});