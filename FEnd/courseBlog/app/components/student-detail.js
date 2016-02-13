import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },
    save: function(id){
      this.set('isEditing', false);
      var myStore = this.get('store');

      var self = this;
      myStore.findRecord('student',id).then(function(student) {
        student.set('number',self.get('selectedStudent.number'));
        student.set('DOB', self.get('selectedStudent.DOB'));
        student.save();  // => PATCH to /posts/:post_id
      });
      this.set('isEditing', false);
      this.get('routing').transitionTo('students');
    },
    cancel: function(){
      this.get('routing').transitionTo('students');
    }

  }
});
