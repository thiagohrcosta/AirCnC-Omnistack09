const Spot = require('../models/Spot');

module.exports = {
    async StorageEvent(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;

        return res.json({ ok : true })
    }
};