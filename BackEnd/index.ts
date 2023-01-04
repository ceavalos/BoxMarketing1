import * as dotenv from 'dotenv' 

import express from 'express';
import upload from './service/uploads'
import serv from './service/test'

const router = require('./controllers/notes')
const Webhook = require('./controllers/webhook')
const cors = require('cors');


dotenv.config()

const app = express();
const bodyParser    = require('body-parser');


app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})

*/
//usando Json en cuerpos
// app.use(express.json());
app.use(jsonParser)
// app.use(urlencodedParser)

// Servicio de carga de archivo
app.use('/upload', upload)

// servicios helpers de prueba
app.use('/test',  serv)

// servicios helpers de prueba
app.use('/note', router)

// servicios helpers de prueba
app.use('/',  Webhook)

/*
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Data received');
})
*/

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
