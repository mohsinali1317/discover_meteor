/**
 * Created by mohsin on 10/14/2015.
 */

Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});