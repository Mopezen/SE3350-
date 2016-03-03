import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAddmissionRule: false,
  isAddingNewAddmissionRule: false,
  dataModel: null,

  AddmissionRuleModel: Ember.computed(function(){
    return this.get('store').findAll('addmissionrule');
  }),
  /*AdmissionRuleModel: Ember.computed(function(){
   return this.get('store').findAll('admissionrule');
   }),*/
  actions: {
    saveNewAddmissionRule: function (){
      var myStore = this.get('store');
      //var selectedRule = myStore.peekRecord('admissionrule', this.$('#rule')[0].value);
      var newAddmissionRule = myStore.createRecord('addmissionrule', {
        description: this.get('description'),
        //rule: selectedRule,
        acadamicprogramcodes: [],
        //dept: []
      });
      newAddmissionRule.save().then(() => {
        this.set('isAddingNewAddmissionRule', false);
      });
    },

    cancelAddNewAddmissionRule() {
      this.set('isAddingNewAddmissionRule', false);
    },

    manageAddmissionRule() {
      this.set('isManagingAddmissionRule', true);
    },

    addNewAddmissionRule() {
      this.set('isAddingNewAddmissionRule', true);
    },
    doneAddmissionRule(){
      this.set('isManagingAddmissionRule', false);
    }

  }
});
