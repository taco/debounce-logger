'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startLogger = undefined;

var _data = require('./data');

var startLogger = exports.startLogger = function startLogger(key) {
    _data.starts[key] = Date.now();
};