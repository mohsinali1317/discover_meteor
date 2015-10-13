/**
 * Created by mohsin on 10/13/2015.
 */
Router.configure({
    layoutTemplate: 'layout'
});
Router.map(function() {
    this.route('postsList', {path: '/'});
});