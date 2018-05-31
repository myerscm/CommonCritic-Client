import Component from '@ember/component'
// import { alias } from '@ember/object/computed'

export default Component.extend({
  // reviewTitle: alias('post.reviewTitle'),
  // category: alias('post.category'),
  // reviewText: alias('post.reviewText'),
  actions: {
    update () {
      if (this.get('reviewTitle')) { this.set('post.reviewTitle', this.get('reviewTitle')) }
      if (this.get('category')) { this.set('post.category', this.get('category')) }
      if (this.get('reviewText')) { this.set('post.reviewText', this.get('reviewText')) }
      console.log(this.get('reviewText'))
      console.log(this.get('category'))
      console.log(this.get('reviewTitle'))
      if (!this.get('reviewTitle') && !this.get('category') && !this.get('reviewText')) {
        this.get('flashMessages').danger('Your review is empty! Try updating it with some content!')
      } else {
        this.sendAction('update', this.get('post'))
      }
    },
    closeEdit () {
      // this.set('reviewText', '')
      // this.set('reviewTitle', '')
      // this.set('category', '')
      this.sendAction('closeEdit')
    },
    deletePost () {
      this.sendAction('deletePost', this.get('post'))
    }
  }
})
