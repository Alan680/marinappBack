import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verificarToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization']; // Obtiene el encabezado de autorización

    if (!authorizationHeader) {
        console.log('No se proporcionó ningún token');
        return res.status(401).json({ message: 'Acceso no autorizado: No se proporcionó ningún token' });
    }

    const token = authorizationHeader.split(' ')[1]; // Divide el encabezado para obtener el token

    try {
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.user = payload;
        console.log('Token verificado correctamente');
        next();
    } catch (error) {
        console.log('Error al verificar el token:', error.message);
        return res.status(401).json({ message: 'Acceso no autorizado: Token inválido' });
    }
};

export default verificarToken;
