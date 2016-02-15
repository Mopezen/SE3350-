import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAcademicLoad: false,
  isAddingNewAcademicLoad: false,
  dataModel: null,

  AcademicLoadModel: Ember.computed(function(){
    return this.get('store').findAll('academic-load');
  }),

  actions: {
    saveNewAcademicLoad: function (){
      var myStore = this.get('store');
      var newAcademicLoad = myStore.createRecord('academic-load', {
        name: this.get('name')
      });
      newAcademicLoad.save().then(() => {
        this.set('isAddingNewAcademicLoad', false);
      });
    },

    cancelAddNewAcademicLoad() {
      this.set('isAddingNewAcademicLoad', false);
    },

    manageAcademicLoad() {
      this.set('isManagingAcademicLoad', true);
    },

    addNewAcademicLoad() {
      this.set('isAddingNewAcademicLoad', true);
    },
    doneAcademicLoad(){
      this.set('isManagingAcademicLoad', false);
    }

  }
});
