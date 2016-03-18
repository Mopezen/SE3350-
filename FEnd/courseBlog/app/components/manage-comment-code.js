import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCommentCode: false,
  isAddingNewCommentCode: false,
  dataModel: null,

  CommentCodeModel: Ember.computed(function(){
    return this.get('store').findAll('comment-code');
  }),
  DistributionResultModel: Ember.computed(function(){
    return this.get('store').findAll('distributionresult');
  }),
  actions: {
    saveNewCommentCode: function (){
      var myStore = this.get('store');
      var distributionResult1 = myStore.peekRecord('distributionresult', this.$('#distResult')[0].value);
      var newCommentCode = myStore.createRecord('comment-code', {

        code: this.get('code'),
        progAction: this.get('progAction'),
        description: this.get('description'),
        notes: this.get('notes'),
        distributionResult: distributionResult1      
      });
      newCommentCode.save().then(() => {
        this.set('isAddingNewCommentCode', false);
      });
    },

    cancelAddNewCommentCode() {
      this.set('isAddingNewCommentCode', false);
    },

    manageCommentCode() {
      this.set('isManagingCommentCode', true);
    },

    addNewCommentCode() {
      this.set('isAddingNewCommentCode', true);
    },
    doneCommentCode(){
      this.set('isManagingCommentCode', false);
    }

  }
});