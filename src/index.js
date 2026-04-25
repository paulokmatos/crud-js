const express = require('express');
const database = require('./database/db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function(req, res) {
    res.send('API rodando');
});

app.get('/usuarios', function(req, res) {
    res.json(database);
});

app.post('/usuarios', function(req, res) {
    const nome = req.body.nome
    const nascimento = req.body.nascimento
    const sexo = req.body.sexo

    if(!nome || !nascimento || !sexo) {
        return res.status(400).json({ mensagem: 'Nome, nascimento e sexo sao obrigatorios' });
    }

    if(sexo !== 'M' && sexo !== 'F') {
        return res.status(400).json({ mensagem: 'Sexo deve ser M ou F' });
    }

    const ids = Object.keys(database).map(Number)
    const ultimoId = ids.length > 0 ? Math.max(...ids) : 0
    const novoId = ultimoId + 1

    const novoUsuario = {
        id: novoId,
        nome: nome,
        nascimento: nascimento,
        sexo: sexo
    }

    database[novoId] = novoUsuario

    res.status(201).json(novoUsuario)
});


app.listen(port, function() {
    console.log('Servidor rodando na porta: ', port)
});
