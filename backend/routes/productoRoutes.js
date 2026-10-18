const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para obtener todos los productos (GET)
router.get('/', productoController.obtenerProductos);

// Ruta para crear un nuevo producto (POST)
router.post('/', productoController.crearProducto);

module.exports = router;