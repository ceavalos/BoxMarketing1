import express from 'express';
import resultado from './helpers/multiplicar';

const app = express();

app.get('/ping', (_req, _res) => {
  _res.send('pong');
});

app.get('/multiplicar/:par1/:par2', (_req, _res) => {
    console.log(_req.params)
    const par1= Number(_req.params.par1)
    const par2= Number(_req.params.par2)
    const respuesta = resultado(par1, par2)
    _res.json(respuesta);
  });

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});