/**
 * Created by mohsin on 10/13/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});

Meteor.publish('comments', function(postId) {
    return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});