//4
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pessoasRoutes = require('./routes');

//5
const app = express();
const port = process.env.PORT || 8080;

//6
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//7
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', pessoasRoutes);

//9
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
