/**
 * Created by mohsin on 10/14/2015.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}