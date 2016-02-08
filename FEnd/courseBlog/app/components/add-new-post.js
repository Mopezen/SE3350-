import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  actions: {
    savePost: function () {
      var myStore = this.get('store');
      var newPost = myStore.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      });
      newPost.save();

      this.set('isEditing', false);
      this.get('routing').transitionTo('posts' );

    },

    addNewPost: function () {
      this.set('isEditing', true);
    },

    cancel: function () {
      this.set('isEditing', false);
    }
  }
});
