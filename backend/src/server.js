const express = require('express');

const app = express();

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

app.use(express.json());

app.get('/users', (req, res) => {
    return res.json( {idade : req.query.idade});
});

app.listen(3333);