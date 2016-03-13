import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  position: DS.attr(),
  academicProgramCode: DS.belongsTo('academicprogramcode', { async: true }),
  dept: DS.belongsTo('department', { async: true })
});
