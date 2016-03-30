import DS from 'ember-data';


export default DS.Model.extend({
	date: DS.attr(),
  	students: DS.belongsTo('student', { async: true }),
  	commentCode: DS.belongsTo('comment-code', { async: true })
});