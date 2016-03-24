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



			//VVVVVV
			/*var xlsx_json = require('C:/Users/Ryan/Documents/GitHub/SE3350-/FEnd/courseBlog/node_modules/xlsx-to-json')

			xlsx_json({
			  input: 'C:/Users/Ryan/Desktop/SAS-Data/students.xlsx',
			  output: 'C:/Users/Ryan/Desktop/SAS-Data/test.json'
			}, function(err, result) {
			  if(err) {
			    console.error(err);
			  }else {
			    console.log(result);
			  }

			});*/
			//^^^^^^^^^^

		}
	}
});
