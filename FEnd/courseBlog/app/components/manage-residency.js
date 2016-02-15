import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingResidency: false,
  isAddingNewResidency: false,
  dataModel: null,

  ResidencyModel: Ember.computed(function(){
    return this.get('store').findAll('residency');
  }),

  actions: {
    saveNewResidency: function (){
      var myStore = this.get('store');
      var newResidency = myStore.createRecord('residency', {
        name: this.get('name')
      });
      newResidency.save().then(() => {
        this.set('isAddingNewResidency', false);
      });
    },

    cancelAddNewResidency() {
      this.set('isAddingNewResidency', false);
    },

    manageResidency() {
      this.set('isManagingResidency', true);
    },

    addNewResidency() {
      this.set('isAddingNewResidency', true);
    },
    doneResidency(){
      this.set('isManagingResidency', false);
    }

  }
});
