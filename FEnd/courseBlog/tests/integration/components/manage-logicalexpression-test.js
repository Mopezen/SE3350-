import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-logicalexpression', 'Integration | Component | manage logicalexpression', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{manage-logicalexpression}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#manage-logicalexpression}}
      template block text
    {{/manage-logicalexpression}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
