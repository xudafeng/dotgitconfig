'use strict';

const assert = require('assert');

const dotgitconfig = require('..');

describe('test', () => {
  it('should be ok', () => {
    const config = dotgitconfig(process.cwd());
    assert.ok(config);
  });
});
