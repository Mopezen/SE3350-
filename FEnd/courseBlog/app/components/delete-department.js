import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteDepartment: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
          myStore.findRecord('department',id).then(function(department) {
          department.destroyRecord(); // => DELETE to /department/:department_id

        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
