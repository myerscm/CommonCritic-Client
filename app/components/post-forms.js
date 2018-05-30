import Component from '@ember/component'
// import { alias } from '@ember/object/computed'

export default Component.extend({
  // reviewTitle: alias('post.reviewTitle'),
  // category: alias('post.category'),
  // reviewText: alias('post.reviewText'),
  newPost: '',
  actions: {
    submit () {
      this.set('newPost', this.get('store').createRecord('post', {}))
      this.set('newPost.reviewTitle', this.get('reviewTitle'))
      this.set('newPost.category', this.get('category'))
      this.set('newPost.reviewText', this.get('reviewText'))
      this.sendAction('submit', this.get('newPost'))
    }
  }
})
