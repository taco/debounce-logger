'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopLogger = undefined;

var _data = require('./data');

var stopLogger = exports.stopLogger = function stopLogger(key) {
    var delay = _data.config.delay;
    var output = _data.config.output;


    if (!Array.isArray(_data.deltas[key])) {
        _data.deltas[key] = [];
    }

    _data.deltas[key].push(Date.now() - _data.starts[key]);

    clearTimeout(_data.timeouts[key]);

    _data.timeouts[key] = setTimeout(function () {
        var total = _data.deltas.reduce(function (p, v) {
            return p + v;
        }, 0);

        console.log(output({ key: key, total: total })); // eslint-disable-line
    }, delay);
};