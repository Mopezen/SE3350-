import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	ITR: DS.hasMany('itrprogram',{async: true}),
	dept: DS.hasMany('programadministration', { async: true }),
	rule: DS.belongsTo('admissionrule', { async: true }),
	CC: DS.hasMany('comment-code',{async: true})
});
