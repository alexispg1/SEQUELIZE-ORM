const express=require('express');
const router=express.Router();

const BoletaTareaController=require('../controllers/BoletaTareaController');
const Authorization=require('../middlewares/validar-jwt');

router.post('/crear',Authorization.auth,BoletaTareaController.create);
router.put('/actualizar/:id',Authorization.auth,BoletaTareaController.update);
router.delete('/eliminar/:id',Authorization.auth,BoletaTareaController.destroy);
router.get('/lista/boleta/tareas',Authorization.auth,BoletaTareaController.index);
router.get('/mi/boleta/tarea/:id',Authorization.auth,BoletaTareaController.show);

module.exports=router;