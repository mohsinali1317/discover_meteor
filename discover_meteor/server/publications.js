/**
 * Created by mohsin on 10/13/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});