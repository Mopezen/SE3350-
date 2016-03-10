import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingTermCode: false,
  isAddingNewTermCode: false,
  dataModel: null,

  ProgramRecordModel: Ember.computed(function(){
    return this.get('store').findAll('programRecord');
  }),
  TermCodeModel: Ember.computed('isEditing', function(){
      return this.get('store').findAll('termCode');
  }),
  actions: {
    saveNewTermCode: function (){
      var myStore = this.get('store');
      var newTermCode = myStore.createRecord('termCode', {
        name: this.get('name'),
        programRecord: []
      }); 
      newTermCode.save().then(() => {
        this.set('isAddingNewTermCode', false);
      });
    },

    cancelAddNewTermCode() {
      this.set('isAddingNewTermCode', false);
    },

    manageTermCode() {
      this.set('isManagingTermCode', true);
    },

    addNewTermCode() {
      this.set('isAddingNewTermCode', true);
    },
    doneTermCode(){
      this.set('isManagingTermCode', false);
    }

  }
});