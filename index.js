/*!
 * has-regex-chars <https://github.com/jonschlinkert/has-regex-chars>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var chars = require('regex-chars');
var cache = require('regex-cache');

module.exports = function (str) {
  // cache the compiled regex so we only call
  // the new RegExp constructor once.
  return cache(function() {
    return new RegExp('[' + chars + ']');
  }).test(str);
};
