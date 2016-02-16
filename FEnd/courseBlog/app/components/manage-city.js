import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCity: false,
  isAddingNewCity: false,
  dataModel: null,

  CityModel: Ember.computed(function(){
    return this.get('store').findAll('city');
  }),

  actions: {
    saveNewCity: function (){
      var myStore = this.get('store');
      var newCity = myStore.createRecord('city', {
        name: this.get('name')
      });
      newCity.save().then(() => {
        this.set('isAddingNewCity', false);
      });
    },

    cancelAddNewCity() {
      this.set('isAddingNewCity', false);
    },

    manageCity() {
      this.set('isManagingCity', true);
    },

    addNewCity() {
      this.set('isAddingNewCity', true);
    },
    doneCity(){
      this.set('isManagingCity', false);
    }

  }
});