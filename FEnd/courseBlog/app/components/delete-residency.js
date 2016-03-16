import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteResidency: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('residency',id).then(function(residency) {
          residency.destroyRecord(); // => DELETE to /department/:department_id

        });

        this.get('routing').transitionTo('students');
      }
    }
  }
});
