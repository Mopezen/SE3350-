import DS from 'ember-data';

export default DS.Model.extend({
	mark: DS.attr(),
	section: DS.attr(),
  	students: DS.belongsTo('student', { async: true }),
  	courseCode: DS.belongsTo('course-code', { async: true }),
  	programRecord: DS.belongsTo('program-record', { async: true })
});