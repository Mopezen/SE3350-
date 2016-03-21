import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingLogicalExpression: false,
  isAddingNewLogicalExpression: false,
  dataModel: null,

  LogicalExpressionModel: Ember.computed(function(){
    return this.get('store').findAll('logicalexpression');
  }),
  admissionRuleModel: Ember.computed(function(){
      return this.get('store').findAll('admissionrule');
  }),
  actions: {
    saveNewLogicalExpression: function (){
      var myStore = this.get('store');
      var logicalValues = this.$('#logicalexpression')[0];
      var parentLExp;
      if(logicalValues){
      	if(logicalValues.value !== "#NOTHING"){
  			parentLExp = myStore.peekRecord('logicalexpression', logicalValues.value);
      	}	
      }else{
      	parentLExp = null;
      }
      var selectedAdmissionRule = myStore.peekRecord('admissionrule', this.$('#admissionrule')[0].value);
      var newLogicalExpression = myStore.createRecord('logicalexpression', {
        booleanExp: this.get('booleanExp'),
        logicalLink: this.get('logicalLink'),
        parent: parentLExp,
        children: [],
        admissionrule: selectedAdmissionRule
      }); 
      newLogicalExpression.save().then(() => {
        this.set('isAddingNewLogicalExpression', false);
      });
    },

    cancelAddNewLogicalExpression() {
      this.set('isAddingNewLogicalExpression', false);
    },

    manageLogicalExpression() {
      this.set('isManagingLogicalExpression', true);
    },

    addNewLogicalExpression() {
      this.set('isAddingNewLogicalExpression', true);
    },
    doneLogicalExpression(){
      this.set('isManagingLogicalExpression', false);
    }

  }
});