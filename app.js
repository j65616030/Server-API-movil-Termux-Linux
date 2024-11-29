const express = require('express');
const WebSocket = require('ws');
const mensajeRoutes = require('./routes/mensajeRoutes');

const app = express();
const wss = new WebSocket.Server({ port: 8080, host: '0.0.0.0' });

// Rutas
app.use('/mensaje', mensajeRoutes);

// Iniciar el servidor
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
