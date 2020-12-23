"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    testCases: {
        type: Array,
        required: true
    },
    examples: {
        type: Array,
        required: true
    }
});
exports["default"] = mongoose.model('Problems', schema, 'problem');
