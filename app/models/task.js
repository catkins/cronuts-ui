import DS from 'ember-data';

let defaultBashScript =
`#!/bin/bash

# your script goes here...
`;

export default DS.Model.extend({

  createdAt:     DS.attr('date'),
  script:        DS.attr('string', { defaultValue: defaultBashScript }),
  language:      DS.attr('string', { defaultValue: 'bash' }),
  frequency:     DS.attr('number'),
  frequencyUnit: DS.attr('string')

});
