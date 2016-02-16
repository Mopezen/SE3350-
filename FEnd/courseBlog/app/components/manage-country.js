import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCountry: false,
  isAddingNewCountry: false,
  dataModel: null,

  CountryModel: Ember.computed(function(){
    return this.get('store').findAll('country');
  }),

  actions: {
    saveNewCountry: function (){
      var myStore = this.get('store');
      var newCountry = myStore.createRecord('country', {
        name: this.get('name')
      });
      newCountry.save().then(() => {
        this.set('isAddingNewCountry', false);
      });
    },

    cancelAddNewCountry() {
      this.set('isAddingNewCountry', false);
    },

    manageCountry() {
      this.set('isManagingCountry', true);
    },

    addNewCountry() {
      this.set('isAddingNewCountry', true);
    },
    doneCountry(){
      this.set('isManagingCountry', false);
    }

  }
});