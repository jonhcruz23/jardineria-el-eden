const User = require('../models/User'); // 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    // 1. Recibir los datos que envía el usuario
    const { email, password } = req.body;

    try {
        // 2. Verificar si el email existe en la base de datos (MongoDB)
        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        // 3. Comparar la contraseña ingresada con la contraseña cifrada de la BD
        // bcrypt.compare() toma la contraseña normal y la compara con el hash
        const passwordCorrecto = await bcrypt.compare(password, usuario.password);
        if (!passwordCorrecto) {
            return res.status(400).json({ msg: 'Contraseña incorrecta' });
        }

        // 4. Generar el Token JWT para mantener la sesión iniciada
        const token = jwt.sign(
            { id: usuario._id, rol: usuario.roleCode }, // Datos que guardaremos dentro del token
            'clave_secreta_super_segura', // En producción, esto debe ir en un archivo .env
            { expiresIn: '1d' } // El token expira en 1 día
        );

        // 5. Responder al frontend con el token
        res.json({ 
            msg: 'Login exitoso', 
            token 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error en el servidor' });
    }
};

// Exportamos la función para que las rutas puedan usarla
module.exports = { login };