import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingITR: false,
  isAddingNewITR: false,
  dataModel: null,

  selectEle: [
    {label: "Eligible", val: true},
    {label: "Ineligible", val: false}
  ],
  ITRModel: Ember.computed(function(){
    return this.get('store').findAll('itrprogram');
  }),
  programModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('academicprogramcode');
  }),
  actions: {
    saveNewITR: function (){
      var myStore = this.get('store');
      var programSelected = myStore.peekRecord('academicprogramcode', this.$('#program')[0].value);
      var newITR = myStore.createRecord('itrprogram', {
        order: this.get('order'),
        program: programSelected,
        eligibilty: this.$('#eligibilty')[0].value,
        student: this.get('currentStudent'),
      });
      this.get('currentStudent').get('ITRList').pushObject(newITR); 
      newITR.save().then(() => {
        this.set('isManagingITR', false);
      });
    },

    cancelAddNewITR() {
      this.set('isAddingNewITR', false);
    },

    manageITR() {
      this.set('isManagingITR', true);
    },

    addNewITR() {
      this.set('isAddingNewITR', true);
    },
    doneITR(){
      this.set('isManagingITR', false);
    }

  }
});