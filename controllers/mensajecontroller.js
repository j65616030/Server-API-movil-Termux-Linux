const mensajeModel = require('../models/mensajeModel');

const obtenerMensaje = async (req, res) => {
  try {
    const mensaje = await mensajeModel.obtenerMensaje();
    res.json(mensaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el mensaje' });
  }
};

const enviarMensaje = async (req, res) => {
  try {
    const mensaje = req.body.mensaje;
    await mensajeModel.enviarMensaje(mensaje);
    res.json({ mensaje: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al enviar el mensaje' });
  }
};

module.exports = { obtenerMensaje, enviarMensaje };
