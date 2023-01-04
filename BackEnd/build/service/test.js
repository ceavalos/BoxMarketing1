"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bmi_1 = __importDefault(require("../helpers/bmi"));
const multiplicador_1 = __importDefault(require("../helpers/multiplicador"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("../util/logger"));
const sequelize_1 = require("sequelize");
const { connectToDatabase, sequelize } = require('../util/base');
const serv = (0, express_1.default)();
serv.get('/bmi/:height/:weight', (_req, _res) => {
    logger_1.default.info('dentro de massa corporal');
    let value1 = Number(_req.params.height);
    let value2 = Number(_req.params.weight);
    let salida = (0, bmi_1.default)(value1, value2);
    _res.send(`${salida}`);
});
serv.get('/ping', (_req, _res) => {
    logger_1.default.info("dentro de servicio ping");
    _res.send('pong');
});
serv.get('/multiplicador/:valor1/:valor2', (_req, _res) => {
    logger_1.default.info("in service multiply");
    let value1 = Number(_req.params.valor1);
    let value2 = Number(_req.params.valor2);
    let texto = "la respuesta de la multplicacion es";
    let salida = (0, multiplicador_1.default)(value1, value2, texto);
    _res.send(`  ${texto}  ${salida}`);
});
serv.get('/base', async (_req, _res) => {
    try {
        //Abriendo conexion a base de datos
        connectToDatabase();
        //
        logger_1.default.info("dentro de base");
        const notes = await sequelize.query("SELECT * FROM notes", { type: sequelize_1.QueryTypes.SELECT });
        logger_1.default.info("dentro de get hacia base de datos");
        sequelize.close();
        _res.json(notes);
    }
    catch (error) {
        logger_1.default.error(error);
        _res.json(error);
    }
});
exports.default = serv;
