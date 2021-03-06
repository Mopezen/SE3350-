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
  //this.route('login');
  this.route('adminPortal');
  this.route('home');
  this.route('user');

  this.route('post', { path: 'posts/:post_id'});
  this.route('login' , {path: '/'});
  this.route('students');
  this.route('student', {path: 'students/:student_id'});
  this.route('edit');
  this.route('deleteAcademicLoad');
  this.route('distribute');
  this.route('add-file');
  this.route('help');
  this.route('departments');
  this.route('department', {path: 'departments/:department_id'});
  this.route('faculties');
  this.route('faculty', {path: 'faculties/:faculty_id'});
});


export default Router;
