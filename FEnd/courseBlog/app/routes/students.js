import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('oudaAuth').isAuthenticated) {
      return this.store.findAll('student');
      // "this.store" is the data store represented by the adapter
      // The default data adapter is REST API adapter
    } else {
      this.transitionTo('login');
    }
  }
});
