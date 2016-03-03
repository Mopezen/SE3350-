import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingDegreeCode: false,
  isAddingNewDegreeCode: false,
  dataModel: null,

  ProgramRecordModel: Ember.computed(function(){
    return this.get('store').findAll('program-record');
  }),
  DegreeCodeModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('degree-code');
  }),
  actions: {
    saveNewDegreeCode: function (){
      var myStore = this.get('store');
      var newDegreeCode = myStore.createRecord('degree-code', {
        name: this.get('name'),
        programRecord: []
      }); 
      newDegreeCode.save().then(() => {
        this.set('isAddingNewDegreeCode', false);
      });
    },

    cancelAddNewDegreeCode() {
      this.set('isAddingNewDegreeCode', false);
    },

    manageDegreeCode() {
      this.set('isManagingDegreeCode', true);
    },

    addNewDegreeCode() {
      this.set('isAddingNewDegreeCode', true);
    },
    doneDegreeCode(){
      this.set('isManagingDegreeCode', false);
    }

  }
});