import Ember from 'ember';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  model() {
    return {
      desiredHeader: this.get('fastboot.request.headers').get('X-Fastboot-Info')
    };
  }
});
