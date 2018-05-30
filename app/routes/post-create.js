import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').createRecord('post', {})
  },
  actions: {
    submit (post) {
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
