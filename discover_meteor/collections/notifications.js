/**
 * Created by mohsin on 10/14/2015.
 */

Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: ownsDocument
});

createCommentNotification = function(comment) {
    var post = Posts.findOne(comment.postId);
    if (comment.userId !== post.userId) {
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            commentId: comment._id,
            commenterName: comment.author,
            read: false
        });
    }
};