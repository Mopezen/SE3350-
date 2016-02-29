import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingFaculty: false,
  isAddingNewFaculty: false,
  dataModel: null,

  DepartmentModel: Ember.computed(function(){
    return this.get('store').findAll('department');
  }),
  facultyModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('faculty');
  }),
  actions: {
    saveNewFaculty: function (){
      var myStore = this.get('store');
      var newFaculty = myStore.createRecord('faculty', {
        name: this.get('name'),
        department: []
      }); 
      newFaculty.save().then(() => {
        this.set('isAddingNewFaculty', false);
      });
    },

    cancelAddNewFaculty() {
      this.set('isAddingNewFaculty', false);
    },

    manageFaculty() {
      this.set('isManagingFaculty', true);
    },

    addNewFaculty() {
      this.set('isAddingNewFaculty', true);
    },
    doneFaculty(){
      this.set('isManagingFaculty', false);
    }

  }
});