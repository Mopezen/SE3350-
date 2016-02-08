import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel (){
    if (this.get('oudaAuth').isAuthenticated) {
      // continue
    } else {
      this.transitionTo('login');
    }
  }
});
