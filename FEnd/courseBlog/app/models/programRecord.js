import DS from 'ember-data';

export default DS.Model.extend({
	level: DS.attr(),
	status: DS.attr(),
	comment: DS.attr(),
  	degreeCode: DS.belongsTo('degreeCode', { async: true }),
  	termCode: DS.belongsTo('termCode', { async: true }),
  	grade: DS.hasMany('grade', { async: true })
});