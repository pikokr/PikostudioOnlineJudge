"use strict";
exports.__esModule = true;
var login_1 = require("./login");
var register_1 = require("./register");
exports["default"] = {
    login: login_1["default"],
    register: register_1["default"],
    admin: function (source, args, context) { var _a; return ((_a = context.user) === null || _a === void 0 ? void 0 : _a.admin) && {}; }
};
