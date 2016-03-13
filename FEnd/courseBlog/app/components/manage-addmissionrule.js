import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAdmissionRule: false,
  isAddingNewAdmissionRule: false,
  dataModel: null,

  AdmissionRuleModel: Ember.computed(function(){
    return this.get('store').findAll('addmissionrule');
  }),
  AcademicProgramCodeModel: Ember.computed(function(){
    return this.get('store').findAll('academicprogramcode');
  }),
  LogicalExpressionModel: Ember.computed(function(){
    return this.get('store').findAll('logicalexpression');
  }),

  actions: {
    saveNewAdmissionRule: function (){
      var myStore = this.get('store');
      var newAdmissionRule = myStore.createRecord('addmissionrule', {
        description: this.get('description'),
        academicProgramCode: [],
        testExpression: []
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
