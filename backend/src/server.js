const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omni09-z0kfu.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// =============================================================
// GET: método utilizado para buscar informação do backend
// POST: quando se quer criar nova informação no backend
// PUT : Informar que quer editar alguma informação
// DELETE: deletar informação
// =============================================================
// req.query = Acessar query params (para filtros )
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
// =============================================================

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);