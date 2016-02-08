import Ember from 'ember';

export default Ember.Component.extend({
  logoIsShowing : false,
  actions: {
    showLogo: function(){
      this.set ('logoIsShowing', true)  ;
    },
    hideLogo: function(){
      this.set ('logoIsShowing', false)  ;
    }
  }


});
