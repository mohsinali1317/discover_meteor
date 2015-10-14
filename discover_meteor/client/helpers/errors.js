/**
 * Created by mohsin on 10/14/2015.
 */

Errors = new Meteor.Collection(null);

throwError = function(message) {
    Errors.insert({message: message, seen: false})
}

clearErrors = function() {
    Errors.remove({seen: true});
}