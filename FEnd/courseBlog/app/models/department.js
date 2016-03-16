import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  programAdministration: DS.hasMany('programadministration',{async: true}),
  faculty: DS.belongsTo('faculty',{async: true})
});