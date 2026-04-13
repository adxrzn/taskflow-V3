const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, titulo: 'Aprender Express', completada: false },
  { id: 2, titulo: 'Configurar el servidor', completada: true }
];

app.get('/api/v1/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.post('/api/v1/tasks', (req, res) => {
  const nuevaTarea = {
    id: Date.now(),
    titulo: req.body.titulo || "Cálculo Zen",
    calorias: req.body.calorias,
    completada: false
  };
  tasks.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

module.exports = app;