import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  DOB: DS.attr(),
  gender: DS.belongsTo('gender',{ async: true }),
  studyLoad: DS.belongsTo('academic-load',{async: true}),
  residency: DS.belongsTo('residency',{async: true})
});
