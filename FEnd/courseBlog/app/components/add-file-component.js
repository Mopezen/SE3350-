import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions:{
		fileLoaded: function(file){
			// readAs="readAsFile" 
			console.log(file.filename);
			console.log(file.data);
			var myStore = this.get('store');
		    var newFile = myStore.createRecord('student-input-file', {
		      excelFile: file
		    });
		    newFile.save();
		}
	}
});
