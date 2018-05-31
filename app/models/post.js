import DS from 'ember-data'

export default DS.Model.extend({
  reviewTitle: DS.attr('string'),
  category: DS.attr('string'),
  reviewText: DS.attr('string'),
  user: DS.belongsTo('user'),
  editable: DS.attr('boolean')
})
