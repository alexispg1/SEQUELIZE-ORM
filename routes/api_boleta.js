const express=require('express');
const router=express.Router();


const BoletaController=require('../controllers/BoletaController');
const Authorization=require('../middlewares/validar-jwt');

router.post('/crear',Authorization.auth,BoletaController.create);
router.put('/actualizar/:id',Authorization.auth,BoletaController.update);
router.delete('/eliminar/:id',Authorization.auth,BoletaController.destroy);
router.get('/lista/boletas',Authorization.auth,BoletaController.index);
router.get('/mi/boleta/:id',Authorization.auth,BoletaController.show);

module.exports=router;