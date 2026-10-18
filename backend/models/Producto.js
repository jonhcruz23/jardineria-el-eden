const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    stockMinimo: { type: Number, default: 5 }
}, { 
    timestamps: true // Agrega fecha de creación y actualización
});

module.exports = mongoose.model('Producto', ProductoSchema);
