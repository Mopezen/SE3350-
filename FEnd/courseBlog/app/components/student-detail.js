import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  genderID: null,
  academicLoadID: null,
  genderModel : Ember.computed('isEditing', function(){
      return this.get('store').findAll('gender');
  }),
  academicLoadModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('academic-load');
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
    },  
    save: function(id){
      this.set('isEditing', false);
      var myStore = this.get('store');
      var genderSelected = myStore.peekRecord('gender', this.$('#gender')[0].value);
      var academicLoadSelected = myStore.peekRecord('academic-load', this.$('#academicLoad')[0].value);
      var self = this;
      myStore.findRecord('student',id).then(function(student) {
        student.set('number',self.get('selectedStudent.number'));
        student.set('DOB', self.get('selectedStudent.DOB'));
        student.set('gender', genderSelected);
        student.set('studyLoad',academicLoadSelected);
        student.save();  // => PATCH to /posts/:post_id
      });
      //genderSelected.get('students').pushObject(myStore.findRecord('student',id));
      this.set('isEditing', false);
      this.get('routing').transitionTo('students');
    },
    cancel: function(){
      this.get('routing').transitionTo('students');
    }

  }
});
