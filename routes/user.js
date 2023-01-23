

const { Router } = require('express');
const contralador = require('../controllers/usarios');

const router = Router();

router.get('/', contralador.usuariosGet);

router.put('/:id', contralador.usuarioPut);

router.post('/', contralador.usuarioPost);

router.delete('/', contralador.usuarioDelete);

module.exports = router;
