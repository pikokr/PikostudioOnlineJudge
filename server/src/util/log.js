"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var chalk_1 = require("chalk");
var origLog = console.log;
var origErr = console.error;
var origWarn = console.warn;
var origInfo = console.info;
var origDebug = console.debug;
console.log = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return origLog.apply(void 0, __spreadArrays([chalk_1["default"].blue('LOG') + ":"], message));
};
console.error = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return origErr.apply(void 0, __spreadArrays([chalk_1["default"].red('ERROR') + ":"], message));
};
console.warn = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return origWarn.apply(void 0, __spreadArrays([chalk_1["default"].yellow('WARN') + ":"], message));
};
console.info = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return origInfo.apply(void 0, __spreadArrays([chalk_1["default"].cyan('INFO') + ":"], message));
};
console.debug = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return origDebug.apply(void 0, __spreadArrays([chalk_1["default"].yellow('DEBUG') + ":"], message));
};
