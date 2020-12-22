const express=require('express');
const router=express.Router();

const TareaController=require('../controllers/TareaController');
const Authorization=require('../middlewares/validar-jwt');

router.post('/crear',Authorization.auth,TareaController.create);
router.put('/actualizar/:id',Authorization.auth,TareaController.update);
router.delete('/eliminar/:id',Authorization.auth,TareaController.destroy);
router.get('/lista/tareas',Authorization.auth,TareaController.index);
router.get('/mi/tarea/:id',Authorization.auth,TareaController.show);

module.exports=router;