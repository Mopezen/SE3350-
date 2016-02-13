import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  genderModel : Ember.computed('isEditing', function(){
      return this.get('store').findAll('gender');
  }),

  actions: {
    saveStudent: function () {
      var myStore = this.get('store');
      var genderSelected = myStore.peekRecord('gender', this.$('#gender')[0].value);
      var newStudent = myStore.createRecord('student', {
        number: this.get('number'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        DOB: this.get('DOB'),
        gender: genderSelected
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
  },
});
