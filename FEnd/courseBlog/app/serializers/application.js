import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  primaryKey: '_id',

  serializeId: function(id) {
    return id.toString();
  }

});


