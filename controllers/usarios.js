const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const {nombre} = req.query;
    res.json({
        msg: 'get API-contralador',
        nombre
    });
    res.end();
}

const usuarioPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API desde controlador',
        id
    });
    res.end();
}

const usuarioPost = (req, res = response) => {

    const body = req.body;
    res.json({
        msg: 'post API desde controlador',
        body
    });
    res.end();
}

usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API desde controlador'
    });
    res.end();
}

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut
}