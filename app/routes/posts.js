import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findAll('post')
  },
  actions: {
    deletePost (post) {
      return post.destroyRecord()
      .then(() => {
        this.get('flashMessages')
          .warning('You deleted this Post!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    saveComplete (post) {
      post.save()
    }
  }
})
