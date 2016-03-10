import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteStudent: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('student',id).then(function(student) {
          student.destroyRecord(); // => DELETE to /posts/:post_id
        });
        this.get('routing').transitionTo('students');
      }
    }
  }
});
