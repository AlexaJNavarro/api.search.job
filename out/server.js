"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const posts_routes_1 = __importDefault(require("./routes/posts.routes"));
const mail_routes_1 = __importDefault(require("./routes/mail.routes"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
class Server {
    constructor() {
        this.app = express_1.default();
    }
    Run() {
        this.Settings();
        this.Routes();
        this.Listening();
    }
    Settings() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_fileupload_1.default());
    }
    Routes() {
        this.app.use(process.env.BASE_URL + "/posts", posts_routes_1.default);
        this.app.use(process.env.BASE_URL + "/mails", mail_routes_1.default);
    }
    Listening() {
        this.app.listen(process.env.PORT);
        console.log("Port:" + process.env.PORT);
    }
}
exports.Server = Server;
