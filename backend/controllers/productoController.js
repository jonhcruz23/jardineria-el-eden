const Producto = require('../models/Producto');

// Controlador para crear un nuevo producto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json({ mensaje: 'Producto creado', producto: nuevoProducto });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
};

// Controlador para listar todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};