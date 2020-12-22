const express=require('express');
const router=express.Router();

const Controller=require('../controllers/auth')
const Authorization=require('../middlewares/validar-jwt')

router.get('/lista',(req,res)=>{
    res.json({usuario:'hola mundo'});
});

router.post('/register',Controller.crearUsuario);
router.post('/login',Controller.login);
router.get('/terminar/registro',Authorization.auth,Controller.terminarRegistro);

module.exports=router;