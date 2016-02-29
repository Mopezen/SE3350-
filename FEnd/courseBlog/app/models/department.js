import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  //programAdministration: DS.hasMany('program-administration',{async: true}),
  faculty: DS.belongsTo('faculty',{async: true})
});