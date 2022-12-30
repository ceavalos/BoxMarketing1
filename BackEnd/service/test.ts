import  masacorporal from  '../helpers/bmi';
import multiplicator from '../helpers/multiplicador'
import express from 'express';
import logger from '../util/logger';
import { QueryTypes } from 'sequelize';

const  {connectToDatabase, sequelize}= require('../util/base');

const serv = express();


serv.get('/bmi/:height/:weight', (_req, _res) => {
    logger.info('dentro de massa corporal')
  let value1 = Number(_req.params.height);
    let value2 = Number(_req.params.weight);
    let salida = masacorporal(value1, value2)
    _res.send(`${salida}`);
 });
 
 serv.get('/ping', (_req, _res) => {
   logger.info("dentro de servicio ping")   
  _res.send('pong');

   });
 
 
   serv.get('/multiplicador/:valor1/:valor2',(_req, _res)=>{
     logger.info("in service multiply")
     let value1 = Number(_req.params.valor1);
     let value2 = Number(_req.params.valor2);
     let texto = "la respuesta de la multplicacion es"
     let salida = multiplicator(value1, value2, texto)
     _res.send(`  ${texto}  ${salida}`);
 
   })
 
   serv.get('/base', async (_req,  _res) => {
     try {
      //Abriendo conexion a base de datos
      connectToDatabase()
      //
      logger.info("dentro de base")
      const notes = await sequelize.query("SELECT * FROM notes", { type: QueryTypes.SELECT })
      logger.info("dentro de get hacia base de datos")
      sequelize.close()

      _res.json(notes)
    } catch (error) {
      logger.error( error )
      _res.json(error)
    }
  })



   export default serv 