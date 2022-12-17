import express from 'express';

//definicion de rutas
import test from './routes/test'

const app = express();

//usando la ruta
app.use(test)

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});