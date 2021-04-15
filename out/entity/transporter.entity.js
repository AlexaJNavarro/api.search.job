"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transSchema = new mongoose_1.Schema({
    service: {
        type: String,
        require: true
    },
    auth: {
        user: {
            type: String,
            require: true
        },
        pass: {
            type: String,
            require: true
        }
    }
});
exports.default = mongoose_1.model('transporter', transSchema);
