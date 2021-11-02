const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos fazendo um get'))

    app.post('/atendimentos', (req, res)=> {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('Rota de atendimentos fazendo um post')
    })
}