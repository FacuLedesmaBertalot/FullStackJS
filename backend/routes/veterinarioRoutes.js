import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

// Área Pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
// router.get('/olvide-password/:token', comprobarToken); esto es lo mismo que lo de abajo
// router.post('/olvide-password/:token', nuevoPassword); esto es lo mismo que lo de abajo
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Área Privada
router.get('/perfil', checkAuth, perfil);


export default router;