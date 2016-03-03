import DS from 'ember-data';

export default DS.Model.extend({
	code: DS.attr(),
	number: DS.attr(),
	name: DS.attr(),
	unit: DS.attr(),
  grade: DS.hasMany('grade', { async: true })
});
