import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  position: DS.attr(),
  acadamicProgramcodes: DS.belongsTo('acadamicprogramcode',{async: true}),
  dept: DS.belongsTo('department',{async: true})
});
