import DS from 'ember-data';

export default DS.Model.extend({
	level: DS.attr(),
	status: DS.attr(),
	comment: DS.attr(),
  	degreeCode: DS.belongsTo('degree-code', { async: true }),
  	termCode: DS.belongsTo('term-code', { async: true }),
  	grade: DS.hasMany('grade', { async: true })
});