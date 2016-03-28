import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  _ITRListSort: ['order:asc'],
  _ITRList: null,
  distributionResults: Ember.computed(function(){
    return this.get('store').query('student', {dist: true});
  }),
  studentModel: Ember.computed(function(){
      return this.get('store').findAll('distributionresult');
  }),
});
