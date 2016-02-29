import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCourseCode: false,
  isAddingNewCourseCode: false,
  dataModel: null,

  CourseCodeModel: Ember.computed(function(){
    return this.get('store').findAll('courseCode');
  }),
  actions: {
    saveNewCourseCode: function (){
      var myStore = this.get('store');
      var newCourseCode = myStore.createRecord('courseCode', {
        code: this.get('code'),
        name: this.get('name'),
        number: this.get('number'),
        unit: this.get('unit')        
      });
      newCourseCode.save().then(() => {
        this.set('isAddingNewCourseCode', false);
      });
    },

    cancelAddNewCourseCode() {
      this.set('isAddingNewCourseCode', false);
    },

    manageCourseCode() {
      this.set('isManagingCourseCode', true);
    },

    addNewCourseCode() {
      this.set('isAddingNewCourseCode', true);
    },
    doneCourseCode(){
      this.set('isManagingCourseCode', false);
    }

  }
});