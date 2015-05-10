import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('task');
  },

  actions: {

    saveTask(task) {
      task.save()
        .then(() => this.transitionTo('tasks.index'));
    },

    willTransition() {
      let model = this.get('currentModel');

      if (model.get('isNew')) {
        this.store.unloadRecord(model);
      }

      return true;
    }
  }

});
