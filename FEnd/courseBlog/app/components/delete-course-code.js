import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteCourseCode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('course-code',id).then(function(courseCode) {
          courseCode.destroyRecord(); // => DELETE to /faculties/:faculty_id
          console.log("deleted");
        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
