import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingITR: false,
  isAddingNewITR: false,
  dataModel: null,

  ITRModel: Ember.computed(function(){
    return this.get('store').findAll('itrprogram');
  }),
  programModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('academicprogramcode');
  }),
  actions: {
    saveNewITR: function (){
      var myStore = this.get('store');
      var test = this.$('#eligibilty').value;
      var ele = (this.$('#eligibilty').value === 'true');
      var programSelected = myStore.peekRecord('academicprogramcode', this.$('#program')[0].value);
      var newITR = myStore.createRecord('itrprogram', {
        order: this.get('order'),
        program: programSelected,
        eligibilty: ele
      }); 
      newITR.save().then(() => {
        this.set('isAddingNewITR', false);
      });
/*	  myStore.findRecord('academicprogramcode', this.$('#program')[0].value).then(function(academicprogramcode) {
		// ...after the record has loaded
		var pArray = academicprogramcode.get('ITR');
		pArray.pushObject(newITR);
		academicprogramcode.set('ITR', pArray);
		academicprogramcode.save();
	  });*/
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