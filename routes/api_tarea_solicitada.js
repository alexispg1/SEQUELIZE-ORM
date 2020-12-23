const express=require('express');
const router=express.Router();


const TareaSolicitadaController=require('../controllers/TareaSolictadaController');
const Authorization=require('../middlewares/validar-jwt');

router.post('/crear',Authorization.auth,TareaSolicitadaController.create);
router.put('/actualizar/:id',Authorization.auth,TareaSolicitadaController.update);
router.delete('/eliminar/:id',Authorization.auth,TareaSolicitadaController.destroy);
router.get('/listar',Authorization.auth,TareaSolicitadaController.index);
router.get('/mi/tarea/solicitada/:id',Authorization.auth,TareaSolicitadaController.show);

module.exports=router;