import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	isManagingGrades: false,
	isAddingNewGrade: false,
	ProgramRecordModel: Ember.computed(function(){
		return this.get('store').findAll('program-record');
	}),
	CourseCodeModel: Ember.computed(function(){
		return this.get('store').findAll('course-code');
	}),
	actions: {
		saveNewGrade: function (){
			var myStore = this.get('store');
			var curStudent = this.get('selectedStudent');
			var _courseCode = myStore.peekRecord('course-code', this.$('#cCode')[0].value);
			var _programRecord = myStore.peekRecord('program-record', this.$('#pRecord')[0].value);
			var newGrade = myStore.createRecord('grade', {
				mark: this.get('mark'),
				section: this.get('section'),
				students: curStudent,
				courseCode: _courseCode,
				programRecord: _programRecord,
			});
			newGrade.save().then(() => {
				this.set('isAddingNewGrade', false);
			});
		},

		cancelAddNewGrade() {
			this.set('isAddingNewGrade', false);
		},

		manageGrade() {
			this.set('isManagingGrades', true);
		},

		addNewGrade() {
			this.set('isAddingNewGrade', true);
		},
		doneGrade(){
			this.set('isManagingGrades', false);
		}
	}
});