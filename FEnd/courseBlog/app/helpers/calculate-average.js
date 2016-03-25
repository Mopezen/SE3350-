import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
	params[1].query('grade',{students : params[0]}).then(function(grades){
		let items = grades.toArray();

		if(items.lenght == 0 ){
			return "NO GRADES FOUND!!";
		}
		average = 0;
		count = 0;
		for(var i=0 ; i < items.length; i++){
			average += items[i].get('mark');
			count+= 1;
		}
		average = average / count;
		return average;
	});
});

/*export default Ember.Helper.helper(calculateAverage);*/