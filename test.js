/*!
 * has-regex-chars <https://github.com/jonschlinkert/has-regex-chars>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var hasRegex = require('./');

describe('hasRegex', function () {
  it('should:', function () {
    assert(hasRegex('a') === false);
    assert(hasRegex('$100') === true);
    assert(hasRegex('a and (b)') === true);
    assert(hasRegex('!') === false);
    assert(hasRegex('$') === true);
    assert(hasRegex('(') === true);
    assert(hasRegex(')') === true);
    assert(hasRegex('*') === true);
    assert(hasRegex('+') === true);
    assert(hasRegex('.') === true);
    assert(hasRegex('/') === true);
    assert(hasRegex('?') === true);
    assert(hasRegex('[') === true);
    assert(hasRegex('\\') === true);
    assert(hasRegex(']') === true);
    assert(hasRegex('^') === true);
    assert(hasRegex('{') === true);
    assert(hasRegex('|') === true);
    assert(hasRegex('}') === true);
  });
});
