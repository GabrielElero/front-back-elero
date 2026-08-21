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

const tarefas = [
  'estudar',
  'prova',
  'tarefa',
  'aula'
]

app.get('/tarefas', (req, res) => {
  res.json(tarefas)
});

const aulas = [
  'matematica',
  'portugues',
  'artes',
  'progamaçao back-end front-end'
]

app.get('/aulas', (req, res) => {
  res.json(aulas)
});

const ativo = [
  'servidor ativo'
]

app.get('/ativo', (req, res) => {
  res.json(ativo)
});

const turmas = [
  '9°B',
  '1°DS',
  '2°DS'
]

app.get('/turmas', (req, res) => {
  res.json(turmas)
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});