import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  actions: {
    saveStudent: function () {
      var myStore = this.get('store');
      var newStudent = myStore.createRecord('student', {
        number: this.get('number'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        DOB: this.get('DOB') 
      });
      newStudent.save();

      this.set('isEditing', false);
      this.get('routing').transitionTo('students');

    },

    addNewStudent: function () {
      this.set('isEditing', true);
    },

    cancel: function () {
      this.set('isEditing', false);
    }
  }
});
