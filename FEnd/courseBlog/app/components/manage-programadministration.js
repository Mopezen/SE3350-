import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingProgramAdministration: false,
  isAddingNewProgramAdministration: false,
  dataModel: null,

  ProgramAdministrationModel: Ember.computed(function(){
    return this.get('store').findAll('programadministration');
  }),
  /*AdmissionRuleModel: Ember.computed(function(){
   return this.get('store').findAll('admissionrule');
   }),*/
  actions: {
    saveNewProgramAdministration: function (){
      var myStore = this.get('store');
      //var selectedRule = myStore.peekRecord('admissionrule', this.$('#rule')[0].value);
      var newProgramAdministration = myStore.createRecord('programadministration', {
        name: this.get('name'),
        position: this.get('position'),
        //rule: selectedRule,
        acadamicprogramcodes: [],
        dept: []
      });
      newProgramAdministration.save().then(() => {
        this.set('isAddingNewProgramAdministration', false);
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
