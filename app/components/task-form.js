import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  task:              null,

  selectedFrequency: 2,
  selectedUnit:      'Hours',

  frequencies: computed('selectedUnit', function() {
    let frequencyMap =  {
      'Minutes': [ 1, 5, 10, 15, 30, 45, 60 ],
      'Hours':   [ 1, 2, 5, 6, 12, 18, 24],
      'Days':    [ 1, 2, 5, 7, 14, 21, 30]
    };

    return frequencyMap[this.get('selectedUnit')];
  }),

  units: computed(function() { return [ 'Minutes', 'Hours', 'Days' ]; }),

  actions: {

    saveTask() {
      let task = this.get('task');

      task.setProperties({
        frequency: this.get('selectedFrequency'),
        frequencyUnit: this.get('selectedUnit').toLowerCase(),
      });

      this.sendAction('save', task);
    }
  }

});
