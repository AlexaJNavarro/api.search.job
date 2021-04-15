"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailController = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const posts_helper_1 = require("../helper/posts.helper");
const uuid_1 = require("uuid");
class mailController {
    static SendMail(req, res) {
        const data = req.body;
        const EDFile = req.files;
        const uuid = uuid_1.v4();
        const name = `${uuid}-${EDFile.path.name}`;
        const direction = `./src/file/${name}`;
        EDFile.path.mv(direction, (err) => {
            if (err) {
                const response = new posts_helper_1.Answer("Error", err, true, null);
                res.status(500).json(response);
            }
            const transporter = nodemailer_1.default.createTransport({
                service: "gmail",
                auth: {
                    user: data.user,
                    pass: data.pass
                }
            });
            const mail = {
                from: data.from,
                to: data.to,
                subject: data.subject,
                text: data.text,
                attachments: [
                    {
                        filename: name,
                        path: direction
                    }
                ]
            };
            transporter.sendMail(mail, (err, info) => {
                if (err) {
                    const response = new posts_helper_1.Answer("Error", err.message, true, null);
                    res.status(500).json(response);
                }
                const response = new posts_helper_1.Answer("Message", "Correo Enviado", false, info);
                res.status(200).json(response);
            });
        });
        return res;
    }
}
exports.mailController = mailController;
