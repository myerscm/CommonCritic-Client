import Component from '@ember/component'
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
  tagName: 'button',
  classNames: ['navbar-toggle', 'collapsed'],
  attributeBindings: [
    'toggle:data-toggle',
    'target:data-target',
    'expanded:aria-expanded'
  ],
  toggle: 'collapse',
  target: '#navigation',
  expanded: false
})
