import DS from 'ember-data';

export default DS.Model.extend({
	mark: DS.attr(),
	section: DS.attr(),
  	students: DS.belongsTo('student', { async: true }),
  	courseCode: DS.belongsTo('courseCode', { async: true }),
  	programRecord: DS.belongsTo('programRecord', { async: true })
});