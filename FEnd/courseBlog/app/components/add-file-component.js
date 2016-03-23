import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		fileLoaded: function(file){
			// readAs="readAsFile" 
			var outputFile;
			console.log(file.name, file.type, file.size);
			// readAs="readAsArrayBuffer|readAsBinaryString|readAsDataURL|readAsText" 
			console.log(file.filename, file.type, file.data, file.size);
			

		}
	}
});
