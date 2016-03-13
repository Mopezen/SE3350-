import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  testExpression: DS.hasMany('logicalexpression',{async: true}),
  academicProgramCode: DS.hasMany('academicprogramcode',{async: true})
});
