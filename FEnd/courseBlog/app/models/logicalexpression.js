import DS from 'ember-data';

export default DS.Model.extend({
	booleanExp: DS.attr(),
	logicalLink: DS.attr(),
  	children: DS.hasMany('logicalexpression', { async: true, inverse: 'parent'}),
  	parent: DS.belongsTo('logicalexpression', { async: true, inverse: 'children'}),
  	admissionRule: DS.belongsTo('admissionrule', { async: true })
});
