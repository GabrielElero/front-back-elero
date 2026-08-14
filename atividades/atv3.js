const express = require('express');
const app = express();

const avisos = [
  'Reunião de responsáveis',
  'Prova de Matemática',
  'Entrega de trabalhos'
];

app.get('/avisos', (req, res) => {
  res.json(avisos);
});



const usuarios = [
    'ana',
    'bianca',
    'joão',
    'gabriel',
    'enzo'
  ]

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});