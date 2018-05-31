import Component from '@ember/component'
import { alias } from '@ember/object/computed'

export default Component.extend({
  reviewTitle: alias('post.reviewTitle'),
  category: alias('post.category'),
  reviewText: alias('post.reviewText'),
  actions: {
    update () {
      this.set('post.reviewTitle', this.get('reviewTitle'))
      this.set('post.category', this.get('category'))
      this.set('post.reviewText', this.get('reviewText'))
      this.sendAction('update', this.get('post'))
    },
    closeEdit () {
      // this.set('reviewText', '')
      // this.set('reviewTitle', '')
      // this.set('category', '')
      this.sendAction('closeEdit')
    }
  }
})
