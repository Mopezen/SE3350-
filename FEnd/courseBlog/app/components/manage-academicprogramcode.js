import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAcademicProgramCode: false,
  isAddingNewAcademicProgramCode: false,
  dataModel: null,

  AcademicProgramCodeModel: Ember.computed(function(){
    return this.get('store').findAll('academicprogramcode');
  }),
  AdmissionRuleModel: Ember.computed(function(){
    return this.get('store').findAll('admissionrule');
  }),
  actions: {
    saveNewAcademicProgramCode: function (){
      var myStore = this.get('store');
      var selectedRule = myStore.peekRecord('admissionrule', this.$('#rule')[0].value);
      var newAcademicProgramCode = myStore.createRecord('academicprogramcode', {
        name: this.get('name'),
        rule: selectedRule,
        ITR: [],
        dept: []
      });
      newAcademicProgramCode.save().then(() => {
        this.set('isAddingNewAcademicProgramCode', false);
      });
    },

    cancelAddNewAcademicProgramCode() {
      this.set('isAddingNewAcademicProgramCode', false);
    },

    manageAcademicProgramCode() {
      this.set('isManagingAcademicProgramCode', true);
    },

    addNewAcademicProgramCode() {
      this.set('isAddingNewAcademicProgramCode', true);
    },
    doneAcademicProgramCode(){
      this.set('isManagingAcademicProgramCode', false);
    }

  }
});