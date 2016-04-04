import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingLogicalExpression: false,
  isAddingNewLogicalExpression: false,
  dataModel: null,

  LogicalExpressionModel: Ember.computed(function(){
    return this.get('store').findAll('logicalexpression');
  }),
  CourseModel: Ember.computed(function(){
    return this.get('store').findAll('course-code');
  }),
  admissionRuleModel: Ember.computed(function(){
      return this.get('store').findAll('admissionrule');
  }),
  actions: {
    saveNewLogicalExpression: function (){
      var myStore = this.get('store');
      var logicalValues = this.$('#logicalexpression')[0];
      var boolExP = "VALUE " + this.$('#BExp1')[0].value + this.get('BExp2');
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
        booleanExp: boolExP,
        logicalLink: this.$('#logicallink')[0].value,
        parent: parentLExp,
        children: [],
        admissionRule: selectedAdmissionRule
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