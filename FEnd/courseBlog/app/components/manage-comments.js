import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  ID: null,

  commentsModel: Ember.computed('isEditing', function(){
//      Ember.Logger.log(this.ID);
      return this.get('store').query('comment', {'post': this.ID});
  }),

  //isEditingChanged: Ember.observer('isEditing', function() {
  //   Ember.Logger.log(this.isEditing);
  //}),

  actions: {
    saveComment () {
      var myStore = this.get('store');
      var post = myStore.peekRecord('post', this.ID);
      var newComment = myStore.createRecord('comment', {
        statement: this.get('statement'),
        timeStamp: new Date()//,
 //       post: post
      });

      post.get('comments').pushObject(newComment);
      newComment.save().then(() => {
          this.set('isEditing', false);
      });




      //newComment.save().then((comment) => {
      //  post.get('comments').pushObject(comment);
      //  post.save();
      //  myStore.query('comment', { 'post': post.id }).then((comments) => {
      //    self.set('commentsModel', comments);
      //  });
      //});


      //this.set('isEditing', false);



    },

    addComment() {
      this.set('isEditing', true);
    },

    cancel () {
      this.set('isEditing', false);
    }
  }
});
