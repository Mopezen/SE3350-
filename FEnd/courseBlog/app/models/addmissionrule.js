import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  testExpression: DS.hasMany('logicalexpression',{async: true}),
  acadamicprogramcodes: DS.hasMany('acadamicprogramcode',{async: true})
});
