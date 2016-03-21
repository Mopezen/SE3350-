var xlsx_json = require('C:/Users/Ryan/Documents/GitHub/SE3350-/BEnd/courseBlog/node_modules/xlsx-to-json')

xlsx_json({
  input: 'C:/Users/Ryan/Desktop/SAS-Data/students.xlsx',
  output: 'C:/Users/Ryan/Desktop/SAS-Data/test.json'
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }

});

