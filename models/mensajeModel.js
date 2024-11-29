const dbConfig = require('../config/database');

const obtenerMensaje = async () => {
  try {
    const mensaje = '¡Hola, mundo!';
    return mensaje;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const enviarMensaje = async (mensaje) => {
  try {
    console.log(`Mensaje recibido: ${mensaje}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { obtenerMensaje, enviarMensaje };
