const express=require('express');
const router=express.Router();

const Authorization=require('../middlewares/validar-jwt');
const SubcategoriaController=require('../controllers/SubcategoriaController');


router.post('/crear',Authorization.auth,SubcategoriaController.create);
router.put('/actualizar/:id',Authorization.auth,SubcategoriaController.update);
router.delete('/eliminar/:id',Authorization.auth,SubcategoriaController.destroy);
router.get('/mis/subcategorias',Authorization.auth,SubcategoriaController.index);
router.get('/mi/subcategoria/:id',Authorization.auth,SubcategoriaController.show);

module.exports=router;