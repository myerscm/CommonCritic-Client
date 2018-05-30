import Component from '@ember/component'

export default Component.extend({
  actions: {
    edit () {
      this.set('editing', true)
    },
    submit (post) {
      post.save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Post Saved'))
        .catch(() => this.get('flashMessages').danger('Post Failed'))
    },
    deletePost () {
      this.sendAction('deletePost', this.get('post'))
    }
  }
})
