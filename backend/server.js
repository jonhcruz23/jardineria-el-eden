const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors'); // Importamos cors

// Importar rutas
const productoRoutes = require('./routes/productoRoutes');
const authRoutes = require('./routes/authRoutes'); // NUEVA RUTA

const app = express();

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors()); // Permite que tu HTML se conecte
app.use(express.json()); // Permite leer JSON del frontend

// Usar las rutas
app.use('/api/productos', productoRoutes);
app.use('/api/auth', authRoutes); // NUEVA RUTA: http://localhost:3000/api/auth/login

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});