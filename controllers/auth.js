const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async (req,res) => {

    try {
    
        let contrasenia=req.body.contrasenia;
        const salt = bcrypt.genSaltSync();
        contrasenia= bcrypt.hashSync(contrasenia, salt );
        
        let user = await Usuario.create({ 
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            correo:req.body.correo,
            contrasenia:contrasenia,
            celular:req.body.celular,
            genero:req.body.genero,
            tipo_usuario:req.body.tipo_usuario
        });
        
        const token = await generarJWT(user);
        
        let usuario={
            id:user.id,
            nombre:user.nombre,
            apellido:user.apellido,
            correo:user.correo,
            celular:user.celular,
            genero:user.genero,
            token:token,
        }

        return res.json({
            ok: true,
            usuario,
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const login = async ( req, res = response ) => {

    const { correo, contrasenia } = req.body;

    try { 
        const usuarioDB = await Usuario.findOne({ where:{ correo:correo}});
        console.log("usuario encontrado ",usuarioDB.correo);
        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }
        // Validar el password
        const validPassword = bcrypt.compareSync( contrasenia, usuarioDB.contrasenia);
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida'
            });
        }
        // Generar el JWT
        const token = await generarJWT( usuarioDB.id );
        
        let usuario={
            id:usuarioDB.id,
            nombre:usuarioDB.nombre,
            apellido:usuarioDB.apellido,
            correo:usuarioDB.correo,
            celular:usuarioDB.celular,
            genero:usuarioDB.genero,
            token:usuarioDB.token,
        }

        res.json({
            ok: true,
            usuario:usuario,
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}


const renewToken = async( req, res = response) => {

    const uid = req.uid;

    // generar un nuevo JWT, generarJWT... uid...
    const token = await generarJWT( uid );

    // Obtener el usuario por el UID, Usuario.findById... 
    const usuario = await Usuario.findById( uid );

    res.json({
        ok: true,
        usuario,
        token
    });

}


module.exports = {
    crearUsuario,
    login,
    renewToken
}
