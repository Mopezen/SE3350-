import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingProvince: false,
  isAddingNewProvince: false,
  dataModel: null,

  ProvinceModel: Ember.computed(function(){
    return this.get('store').findAll('province');
  }),

  actions: {
    saveNewProvince: function (){
      var myStore = this.get('store');
      var newProvince = myStore.createRecord('province', {
        name: this.get('name')
      });
      newProvince.save().then(() => {
        this.set('isAddingNewProvince', false);
      });
    },

    cancelAddNewProvince() {
      this.set('isAddingNewProvince', false);
    },

    manageProvince() {
      this.set('isManagingProvince', true);
    },

    addNewProvince() {
      this.set('isAddingNewProvince', true);
    },
    doneProvince(){
      this.set('isManagingProvince', false);
    }

  }
});