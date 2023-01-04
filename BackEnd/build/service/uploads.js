"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const uploads = (0, express_1.default)();
const storage = multer_1.default.diskStorage({
    destination: 'uploads',
    filename: function (_req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
uploads.post('/', upload.single('avatar'), function (_req, _res, _next) {
    _res.status(201).send("File created");
});
exports.default = uploads;
