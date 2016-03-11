import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    deleteAcademicLoad: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure?')) {
        myStore.findRecord('academic-load',id).then(function(academicload) {

          academicload.destroyRecord();
        });

        this.get('routing').transitionTo('students');
      }
    }
  }
});
/**
 * Created by H on 2016-03-10.
 */
