"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    company_name: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    }
});
exports.default = mongoose_1.model('posts', postsSchema);
