"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DB {
    static Connection() {
        try {
            if (typeof process.env.URL_DB !== 'undefined') {
                mongoose_1.default.connect(process.env.URL_DB, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                console.log("Base de Datos Conectada");
            }
            else {
                throw new Error("No se logro conectar la DB");
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.DB = DB;
