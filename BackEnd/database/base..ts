//require('dotenv').config()

import dotenv from 'dotenv'
import express from 'express';
import resultado from '../helpers/multiplicar'
import  { Sequelize, QueryTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
})

const test = express();

test.get('/ping', (_req, _res) => {
  _res.send('pong');
});


test.get('/multiplicar/:par1/:par2', (_req, _res) => {
  console.log(_req.params)
  const par1= Number(_req.params.par1)
  const par2= Number(_req.params.par2)
  const respuesta = resultado(par1, par2)
  _res.json(respuesta);
});

test.get('/notes', async (_req,  _res) => {
    const notes = await sequelize.query("SELECT * FROM notes", { type: QueryTypes.SELECT })
    _res.json(notes)
  })



/*
const main = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
*/

export default test