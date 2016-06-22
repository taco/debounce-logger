'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configLogger = require('./components/configLogger');

Object.defineProperty(exports, 'configLogger', {
  enumerable: true,
  get: function get() {
    return _configLogger.configLogger;
  }
});

var _startLogger = require('./components/startLogger');

Object.defineProperty(exports, 'startLogger', {
  enumerable: true,
  get: function get() {
    return _startLogger.startLogger;
  }
});

var _stopLogger = require('./components/stopLogger');

Object.defineProperty(exports, 'stopLogger', {
  enumerable: true,
  get: function get() {
    return _stopLogger.stopLogger;
  }
});