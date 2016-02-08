import Ember from 'ember';


export default Ember.Route.extend({
  renderTemplate: function () {
    if (this.get('oudaAuth').isAuthenticated) { //This is to disable the effect of back button in the browser
      location.replace(location.origin+'/posts');
    }else {
      this.render('login', {  // the template to render
        into: 'application',  // the template to render into
        outlet: 'login'
      });
    }
  }
});


