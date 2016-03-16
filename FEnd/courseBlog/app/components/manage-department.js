import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingDepartment: false,
  isAddingNewDepartment: false,
  dataModel: null,

  DepartmentModel: Ember.computed(function(){
    return this.get('store').findAll('department');
  }),
  facultyModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('faculty');
  }),
  actions: {
    saveNewDepartment: function (){
      var myStore = this.get('store');
      var facultySelected = myStore.peekRecord('faculty', this.$('#faculty')[0].value);
      var newDepartment = myStore.createRecord('department', {
        name: this.get('name'),
        programAdministration: [],
        faculty: facultySelected
      });
      facultySelected.get('department').pushObject(newDepartment); 
      newDepartment.save().then(() => {

        this.set('isAddingNewDepartment', false);
      });
    },

    cancelAddNewDepartment() {
      this.set('isAddingNewDepartment', false);
    },

    manageDepartment() {
      this.set('isManagingDepartment', true);
    },

    addNewDepartment() {
      this.set('isAddingNewDepartment', true);
    },
    doneDepartment(){
      this.set('isManagingDepartment', false);
    }

  }
});