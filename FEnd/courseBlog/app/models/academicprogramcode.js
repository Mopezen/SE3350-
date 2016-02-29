import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	ITR: DS.hasMany('itrprogram',{async: true})
});
