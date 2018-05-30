import Component from '@ember/component'

export default Component.extend({
  actions: {
    update () {
      this.set('post.reviewTitle', this.get('reviewTitle'))
      this.set('post.category', this.get('category'))
      this.set('post.reviewText', this.get('reviewText'))
      this.sendAction('update', this.get('post'))
    },
    closeEdit () {
      this.set('reviewText', '')
      this.set('reviewTitle', '')
      this.set('category', '')
      this.sendAction('closeEdit')
    }
  }
})
