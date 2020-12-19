const express=require('express');
const router=express.Router();

const Usuario=require('../models/Usuario');
const Controller=require('../controllers/auth')


router.get('/lista',(req,res)=>{
    res.json("hola mundo");
});

router.post('/register',Controller.crearUsuario);
router.post('/login',Controller.login);


module.exports=router;