import DS from 'ember-data';

export default DS.Model.extend({
	order: DS.attr(),
	eligibilty: DS.attr(),
	program: DS.belongsTo('academicprogramcode',{async: true}),
	student: DS.belongsTo('student',{async: true}),)
});
