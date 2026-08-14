const express = require ('express');
const { get } = require('node:http');
const app = express();

app.get('/', (req, res) => {
    res.send('sistema escolar no ar')
});

app.listen(3000, () => {
    console.log ('servidor rodando na porta 3000');
});

app.get('/gula', (req, res) => {
    res.send('memorias')
});
app.get('/inveja', (req, res) => {
    res.send('return by death')
});
app.get('/ira', (req, res) => {
    res.send('cara ou coroa')
});

app.get('/sobre', (req, res) => {
    res.send('escola de muitos alunos')
});

app.get('/equipe', (req, res) => {
    res.send('professores e funcionarios')
});

app.get('/contato', (req, res) => {
    res.send('diretor cesar')
});