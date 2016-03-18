import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteCommentCode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('comment-code',id).then(function(commentCode) {
          commentCode.destroyRecord(); // => DELETE to /faculties/:faculty_id
          console.log("deleted");
        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
