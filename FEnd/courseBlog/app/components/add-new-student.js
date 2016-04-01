import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  countryCur: null,

  studentModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('student');
  }),
  genderModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('gender');
  }),
  academicLoadModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('academic-load');
  }),
  residencyModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('residency');
  }),
  countryModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('country');
  }),
  provinceModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('province');
  }),
  cityModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('city');
  }),
  itrprogramModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('itrprogram');
  }),
   MST01IsPermitted: Ember.computed(function(){ //Manage system roles
    var authentication = this.get('oudaAuth');
    if (authentication.getName === "Root") {
      return true;
    } else {
      return (authentication.get('userCList').indexOf("MST01") >= 0);
    }
  }),
  actions: {
    saveStudent: function () {
      var myStore = this.get('store');
      var genderSelected = myStore.peekRecord('gender', this.$('#gender')[0].value);
      var academicLoadSelected = myStore.peekRecord('academic-load', this.$('#academicLoad')[0].value);
      var residencySelected = myStore.peekRecord('residency', this.$('#residency')[0].value);
      var countrySelected = myStore.peekRecord('country', this.$('#country')[0].value);
      var provinceSelected = myStore.peekRecord('province', this.$('#province')[0].value);
      var citySelected = myStore.peekRecord('city', this.$('#city')[0].value);
      var newStudent = myStore.createRecord('student', {
        number: this.get('number'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        DOB: this.get('DOB'),
        gender: genderSelected,
        studyLoad: academicLoadSelected,
        residency: residencySelected,
        country: countrySelected,
        province: provinceSelected,
        city: citySelected,
        ITRList: [],
        cumAverage: Math.random() * (100 - 1) + 1
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
    },

    updateSelectedCountry: function () {
      countryCur = this.get('store').peekRecord('country', this.$('#country')[0].value);
    },
  },
});
