"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = exports.config = {
    delay: 250,
    output: function output(_ref) {
        var key = _ref.key;
        var total = _ref.total;
        return key + " total: " + total + " ms";
    }
};

var timeouts = exports.timeouts = {};
var deltas = exports.deltas = {};
var starts = exports.starts = {};