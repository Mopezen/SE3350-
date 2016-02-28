import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteAcademicProgramCode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
          myStore.findRecord('academicprogramcode',id).then(function(academicprogramcode) {
          academicprogramcode.destroyRecord(); // => DELETE to /department/:department_id

        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
