import Ember from 'ember';

<<<<<<< HEAD
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
=======

// X used for parsing XLSX files to JSON.
var X;
Ember.$.getScript('/assets/scripts/jszip.js', function(){
	Ember.$.getScript('/assets/scripts/xlsx.js', function(){
		X = XLSX;
	});
});
export default Ember.Component.extend({
	actions: {
		fileUpload: function() {
			var input = document.getElementById("fileInput");
			var mStore = this.get('store');
			handleFile(input.files, mStore);
>>>>>>> origin/JSON-Functionality
		}
	}
});
// Fix encoding.
function fixdata(data) {
	var o = "",
		l = 0,
		w = 10240;
	for (; l < data.byteLength / w; ++l) {
		o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
	}
	o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
	return o;
}
// Convert workbook to JSON.
function to_json(workbook) {
	var result = {};
	workbook.SheetNames.forEach(function(sheetName) {
		var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		if (roa.length > 0) {
			result[sheetName] = roa;
		}
	});
	return result;
}
// Convert workbook to JSON and display on UI and console.
function process_wb(wb) {
	var json_object = to_json(wb);
	
	// Output JSON object to console for testing.
	console.log(json_object);
}
function handleFile(files, store) {
	var f = files[0]; {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var wb;
			var arr = fixdata(data);
			wb = X.read(btoa(arr), {
				type: 'base64'
			});
			process_wb(wb);
		};
		reader.readAsArrayBuffer(f);
	}
}
