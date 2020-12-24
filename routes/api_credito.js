const express=require('express');
const router=express.Router();

const CreditoController=require('../controllers/CreditoController');
const Authorization=require('../middlewares/validar-jwt');

router.post('/crear',Authorization.auth,CreditoController.create);
router.delete('/eliminar/:id',Authorization.auth,CreditoController.destroy);
router.put('/actualizar/:id',Authorization.auth,CreditoController.update);
router.get('/mis/creditos',Authorization.auth,CreditoController.index);
router.get('/mi/credito/:id',Authorization.auth,CreditoController.show);

module.exports=router;