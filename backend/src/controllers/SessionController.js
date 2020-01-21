// index : criando listagem de sessões
// show: listar uma única seção
// update: atualizar uma sessão
// destroy: apagar uma sessão

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        const user = await User.create({ email });

        return res.json(user);
    }
};