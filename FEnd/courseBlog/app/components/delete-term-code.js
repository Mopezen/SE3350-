import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteTermCode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('term-code',id).then(function(termCode) {
          termCode.destroyRecord(); // => DELETE to /faculties/:faculty_id

        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
