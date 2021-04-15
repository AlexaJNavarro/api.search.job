"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./server");
const connection_db_1 = require("./db/connection.db");
(() => {
    dotenv_1.default.config();
    connection_db_1.DB.Connection();
    const server = new server_1.Server();
    server.Run();
})();
