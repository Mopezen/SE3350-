import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteFaculty: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('faculty',id).then(function(faculty) {
          faculty.destroyRecord(); // => DELETE to /faculties/:faculty_id

        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
