const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');

router.get('/', mensajeController.obtenerMensaje);
router.post('/', mensajeController.enviarMensaje);

module.exports = router;
