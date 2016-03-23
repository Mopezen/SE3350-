import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
  	studentModel: Ember.computed(function(){
		return this.get('store').findAll('student');
  	}),
});
