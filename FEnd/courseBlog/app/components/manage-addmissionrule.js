import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAdmissionRule: false,
  isAddingNewAdmissionRule: false,
  dataModel: null,

  AdmissionRuleModel: Ember.computed(function(){
    return this.get('store').findAll('addmissionrule');
  }),
  /*AdmissionRuleModel: Ember.computed(function(){
   return this.get('store').findAll('admissionrule');
   }),*/
  actions: {
    saveNewAdmissionRule: function (){
      var myStore = this.get('store');
      //var selectedRule = myStore.peekRecord('admissionrule', this.$('#rule')[0].value);
      var newAdmissionRule = myStore.createRecord('addmissionrule', {
        description: this.get('description'),
        logicalExpression: [],
        acadamicprogramcodes: [],
        dept: []
      });
      newAdmissionRule.save().then(() => {
        this.set('isAddingNewAdmissionRule', false);
      });
    },

    cancelAddNewAdmissionRule() {
      this.set('isAddingNewAdmissionRule', false);
    },

    manageAdmissionRule() {
      this.set('isManagingAdmissionRule', true);
    },

    addNewAdmissionRule() {
      this.set('isAddingNewAdmissionRule', true);
    },
    doneAdmissionRule(){
      this.set('isManagingAdmissionRule', false);
    }

  }
});
