import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deletePost: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('post',id).then(function(post) {
          post.destroyRecord(); // => DELETE to /posts/:post_id

        });

        this.get('routing').transitionTo('posts' );
      }
    }
  }
});
