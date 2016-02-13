import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  student: DS.hasMany('student', { async: true })
});
