import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingProgramAdministration: false,
  isAddingNewProgramAdministration: false,
  dataModel: null,

  DepartmentModel: Ember.computed(function(){
    return this.get('store').findAll('department');
  }),
  AcademicProgramCodeModel: Ember.computed(function(){
    return this.get('store').findAll('academicprogramcode');
  }),
  ProgramAdministrationModel: Ember.computed('isEditing', function(){
    return this.get('store').findAll('programadministration');
  }),
  actions: {
    saveNewProgramAdministration: function (){
      var myStore = this.get('store');
      var deptSelected = myStore.peekRecord('depatrment', this.$('#depatrment')[0].value);
      var APCSelected = myStore.peekRecord('academicprogramcode', this.$('#academicprogramcode')[0].value);

      var newProgramAdministration = myStore.createRecord('programadministration', {
        name: this.get('name'),
        position: this.get('position'),
        academicProgramCode: APCSelected,
        dept: deptSelected
      });
      deptSelected.get('programadministration').pushObject(newProgramAdministration);
      APCSelected.get('programadministration').pushObject(newProgramAdministration);
      newProgramAdministration.save().then(() => {

        this.set('isAddingProgramAdministration', false);
      });
    },

    cancelAddNewProgramAdministration() {
      this.set('isAddingNewProgramAdministration', false);
    },

    manageProgramAdministration() {
      this.set('isManagingProgramAdministration', true);
    },

    addNewProgramAdministration() {
      this.set('isAddingNewProgramAdministration', true);
    },
    doneProgramAdministration(){
      this.set('isManagingProgramAdministration', false);
    }

  }
});
