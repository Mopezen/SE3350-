// Manage the behaviour of the login screen
import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),

  actions: {
    login(){
      this.get('oudaAuth').encrypt(this.get('password'));
      this.get('oudaAuth').setName(this.get('name'));
      if (this.get('oudaAuth').open() === true) {
        this.get('routing').transitionTo('posts');
      }
      else {
        // you may route to another template to create account

      }
    }
  }
});
