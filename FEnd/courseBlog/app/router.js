import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('about');
  this.route('contact', function() {
    this.route('phone');
    this.route('email');
  });

  this.route('post', { path: 'posts/:post_id'});
  this.route('login' , {path: '/'});
});


export default Router;
