import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
	console.log("Hi");
	var items = params[1].query('distributionresult',{students : params[0]});
	console.log(items);
	return items;
});

/*export default Ember.Helper.helper(calculateAverage);*/