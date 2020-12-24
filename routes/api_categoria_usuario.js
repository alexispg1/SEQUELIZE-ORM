const express=require('express');
const router=express.Router();

const CategoriaUsuarioController=require('../controllers/CategoriaUsuarioController');
const Authorization=require('../middlewares/validar-jwt');



router.post('/crear',Authorization.auth,CategoriaUsuarioController.create);
router.delete('/eliminar/:id',Authorization.auth,CategoriaUsuarioController.destroy);
router.put('/actualizar/:id',Authorization.auth,CategoriaUsuarioController.update);
router.get('/mis/categorias/usuarios',Authorization.auth,CategoriaUsuarioController.index);
router.get('/mi/usuario/categoria/:id',Authorization.auth,CategoriaUsuarioController.show);

module.exports=router;