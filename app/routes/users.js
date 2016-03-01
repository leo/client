import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Users',
  renderTemplate () {
    this.render('list')
  },
  model () {
    return this.store.findAll('user')
  },
  parentController: Ember.computed(function () {
    return this.controllerFor('application')
  }),
  setupController (controller, model) {
    this._super(controller, model)
    this.get('parentController').set('outer', false)
  }
})