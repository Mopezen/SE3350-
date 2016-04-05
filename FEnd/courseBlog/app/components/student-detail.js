import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  genders: null,
  routing: Ember.inject.service('-routing'),

  genderID: null,
  academicLoadID: null,
  residencyID: null,
  countryID: null,
  provinceID: null,
  cityID: null,
  itrprogramID: null,
  addingAward: false,
  addingSchool: false,
  genderModel : Ember.computed('isEditing', function(){
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
      return this.get('store').query('itrprogram',{student: this.get('selectedStudent.id')});
  }),
  SAWC: Ember.computed(function(){
      return this.get('store').findAll('scholarandawardcode');
  }),
  SecondarySchool: Ember.computed(function(){
      return this.get('store').findAll('secondaryschool');
  }),
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
      var updatedStudent = this.get('selectedStudent');
      var self = this;
      updatedStudent.get('gender').then(function(res){
        if (res) {
          self.set ('genderID' , res.get('id'));
        }
      });
      updatedStudent.get('studyLoad').then(function(res){
        if (res) {
          self.set ('academicLoadID' , res.get('id'));
        }
      });
      updatedStudent.get('residency').then(function(res){
        if (res) {
          self.set ('residencyID' , res.get('id'));
        }
      });
      updatedStudent.get('country').then(function(res){
        if (res) {
          self.set ('countryID' , res.get('id'));
        }
      });
      updatedStudent.get('province').then(function(res){
        if (res) {
          self.set ('provinceID' , res.get('id'));
        }
      });
      updatedStudent.get('city').then(function(res){
        if (res) {
          self.set ('cityID' , res.get('id'));
        }
      });
    },  
    save: function(id){
      this.set('isEditing', false);
      var myStore = this.get('store');
      var genderSelected = myStore.peekRecord('gender', this.$('#gender')[0].value);
      var academicLoadSelected = myStore.peekRecord('academic-load', this.$('#academicLoad')[0].value);
      var residencySelected = myStore.peekRecord('residency', this.$('#residency')[0].value);
      var countrySelected = myStore.peekRecord('country', this.$('#country')[0].value);
      var provinceSelected = myStore.peekRecord('province', this.$('#province')[0].value);
      var citySelected = myStore.peekRecord('city', this.$('#city')[0].value);
      var ITR = this.get('selectedStudent.ITRList');
      var self = this;
      myStore.findRecord('student',id).then(function(student) {
        student.set('number',self.get('selectedStudent.number'));
        student.set('DOB', self.get('selectedStudent.DOB'));
        student.set('gender', genderSelected);
        student.set('studyLoad',academicLoadSelected);
        student.set('residency',residencySelected);
        student.set('country',countrySelected);
        student.set('province',provinceSelected);
        student.set('city',citySelected);
        student.set('ITRList',ITR);
        student.save();  // => PATCH to /posts/:post_id
      });
      //genderSelected.get('students').pushObject(myStore.findRecord('student',id));
      this.set('isEditing', false);
      this.get('routing').transitionTo('students');
    },
    cancel: function(){
      this.get('routing').transitionTo('students');
    },
    addAward: function(){
      this.set('addingAward',true);
    },
    saveAward: function(){
      var _currentStudent = this.get('selectedStudent.awardInfo');
      var myStore = this.get('store');
      this.set('addingAward',false);
      _currentStudent.addObject(myStore.peekRecord('scholarandawardcode', this.$('#award')[0].value));
      console.log(_currentStudent.length);
      myStore.findRecord('student',this.get('selectedStudent.id')).then(function(student) {
        student.set('awardInfo',_currentStudent);
        student.save();  // => PATCH to /posts/:post_id
      });
    },
    addSecondarySchool: function(){
      this.set('addingSchool',true);
    },
    saveSecondarySchool: function(){
      var _currentStudent = this.get('selectedStudent.hSchool');
      var myStore = this.get('store');
      this.set('addingSchool',false);
      _currentStudent.addObject(myStore.peekRecord('secondaryschool', this.$('#school')[0].value));
      console.log(_currentStudent.length);
      myStore.findRecord('student',this.get('selectedStudent.id')).then(function(student) {
        student.set('hSchool',_currentStudent);
        student.save();  // => PATCH to /posts/:post_id
      });
    }
  }
});
