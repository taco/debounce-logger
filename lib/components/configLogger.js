'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configLogger = undefined;

var _data = require('./data');

var configLogger = exports.configLogger = function configLogger(cfg) {
    return Object.keys(cfg).forEach(function (k) {
        if (typeof cfg[k] !== 'undefined') {
            _data.config[k] = cfg[k];
        }
    });
};