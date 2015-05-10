import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('task', {
  // Specify the other units that are required for this test.
  needs: []
});

test('can be created without exploding', function(assert) {
  // arrange

  // act
  var model = this.subject();

  // assert
  assert.ok(!!model);
});

test('it defaults language to bash', function(assert) {
  // arrange
  var model = this.subject();

  // act

  // assert
  assert.equal(model.get('language'), 'bash');
});

test('it has default script', function(assert) {
  // arrange
  var model = this.subject();

  // act

  // assert
  assert.ok(model.get('script').match( /#\!\/bin\/bash/ ));
});
