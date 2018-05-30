import Route from '@ember/routing/route'

export default Route.extend({
  // newPost: '',
  actions: {
    submit (post) {
      // this.get('store').createRecord('post', {})
      return post.save()
      .then(() => this.transitionTo('posts'))
      .then(() => {
        this.get('flashMessages').success('Review Posted!')
      })
      .catch(() => {
        this.get('flashMessages').danger('Failed to post review.')
      })
    }
  }
})
