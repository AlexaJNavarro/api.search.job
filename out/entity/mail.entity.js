"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mailSchema = new mongoose_1.Schema({
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    attachments: [
        {
            filename: {
                type: String,
                require: true
            },
            path: {
                type: '../file/baekhyun.jpg'
            }
        }
    ]
});
exports.default = mongoose_1.model('mails', mailSchema);
