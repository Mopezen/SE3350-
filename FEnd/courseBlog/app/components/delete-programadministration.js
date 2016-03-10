import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteProgramAdministration: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('programadministration',id).then(function(programadministration) {
          programadministration.destroyRecord();
        });

        this.get('routing').transitionTo('edit');
      }
    }
  }
});
