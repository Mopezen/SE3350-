import Ember from 'ember';

export default Ember.Service.extend({
  userName: null,
  encryptedPassword: null,
  token: null,
  isAuthenticated: false,

  init() {
    this._super(...arguments);
//    this.set('userName', null);
  },

  setName(name) {
    this.set('userName', name.toLowerCase());
  },

  encrypt(password) {
    // needs sha-256 salt hashing method
    this.set('encryptedPassword', password);
  },

  // create a new authorization
  // needs also to maintain the encryption
  open() {
    var username = this.get('userName');
    var password = this.get('encryptedPassword');

    // send username and password to the server and get the capability list or no access flag
    // set the capability list as a token property in this service and return true
    // or set the token property null and return false.
    //

    // this is just for now
    if (password === 'ouda' && username === 'ouda') {
      var profile = {
        'name': username,
        'token': true
      };
      localStorage.setItem('uwoeng-access-token', JSON.stringify(profile));
      this.set('token', true); // should be the capability list
      this.set('isAuthenticated', true);
      return true;
    }
    else
    {
      this.close();
      return false;
    }
  },

  fetch() {
    // get info from backend database based on the token
    // if token not expired
    // assign the value of userName and the other information
    var profile = JSON.parse(localStorage.getItem('uwoeng-access-token'));
    if (profile) {
      this.set('isAuthenticated', true);
      this.set('userName', profile.name);
    }
  },

  close() {
    this.set('token', null);
    this.set('userName', null);
    this.set('encryptedPassword', null);
    this.set('isAuthenticated', false);
    window.localStorage.removeItem('uwoeng-access-token');
  }


});
