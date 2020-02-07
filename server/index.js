const express = require('express'),
      authCtrl = require('./controllers/authController'),
      cartCtrl = require('./controllers/cartController'),
      app = express();

app.use(express.json());

const port = 3333;
app.listen(port, () => console.log(`Memeing on ${port}`));