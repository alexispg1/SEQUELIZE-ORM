const express=require('express');
const router=express.Router();

const CategoriaController=require('../controllers/CategoriaController');
const Authorization=require('../middlewares/validar-jwt');



router.post('/crear',Authorization.auth,CategoriaController.create);
router.delete('/delete/:id',Authorization.auth,CategoriaController.destroy);
router.put('/actualizar/:id',Authorization.auth,CategoriaController.update);
router.get('/mis/categorias',Authorization.auth,CategoriaController.index);
router.get('/mi/categoria/:id',Authorization.auth,CategoriaController.show);

module.exports=router;