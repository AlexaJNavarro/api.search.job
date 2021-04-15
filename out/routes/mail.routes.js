"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controller_1 = require("../controller/mail.controller");
const routesMail = express_1.Router();
routesMail
    .post("/", mail_controller_1.mailController.SendMail);
exports.default = routesMail;
