import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	_ITRListSort: ['order:asc'],
	_ITRList: null,
  	distributionResults: Ember.computed(function(){
		return this.get('store').query('student', {dist: true});
  	}),
  	/*studentSorting: ['cumAverage:desc'],
  	sortedStudents: Ember.computed.sort('studentModel','studentSorting'),
  	getITRS: Ember.computed(function(){
  		var _sList = this.get('sortedStudents');
  		for(var a =0;a < _sList.get('length');a++){
			this.get('store').query('itrprogram',{student : _sList.objectAt(a).get('id')}).then(function(itrprograms){
				var _ITRListSort = ['order:asc'];
				var _ITRList = Ember.computed.sort(itrprograms,'_ITRListSort');
				console.log(_ITRList.get());
				for(var b = 0; b < itrprograms.get('length'); b++){
					this.get('store').findRecord('academicprogramcode', itrprograms.objectAt(b).get('program')).then(function(acaProgramCode){
						console.log(acaProgramCode.objectAt(0).get('name'));
					});
				}
			});
  		}

  	})*/


  	/*distributionResults: Ember.computed(function(){
  		this.get('store').findAll('student').then(function(students){
  			var studentList = Ember.computed.sort('students', ['cumAverage:desc']);
  			return studentList;
  		});
  	})*/
});
