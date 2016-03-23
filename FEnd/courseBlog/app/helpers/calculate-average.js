import Ember from 'ember';

export default Ember.Helper.extend({
	store: Ember.inject.service(),
	compute(params/*, hash*/){
		this.get('store').query('grade',{students : params[0]}).then(function(grades){
			
			var average = 0;
			var count = 0;
			for(var i=0 ; i < grades.length; i++){
				average += grades[i];
				count+= 1;
			}
			average = average / count;
			return average;
		});
		return "NO GRADES FOUND!";
	}
});

/*export default Ember.Helper.helper(calculateAverage);*/