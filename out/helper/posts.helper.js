"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
class Answer {
    constructor(type_message, message, error, data) {
        this.type_message = type_message;
        this.message = message;
        this.error = error;
        this.data = data;
    }
}
exports.Answer = Answer;
