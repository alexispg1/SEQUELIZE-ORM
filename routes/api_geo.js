const express=require('express');
const router=express.Router();

const GeoController=require('../controllers/GeoController');
const Authorization=require('../middlewares/validar-jwt');
router.post('/crear',Authorization.auth,GeoController.create);
router.delete('/eliminar/:id',Authorization.auth,GeoController.destroy);
router.put('/actualizar/:id',Authorization.auth,GeoController.update);
router.get('/mis/geo',Authorization.auth,GeoController.index);
router.get('/mi/geo/:id',Authorization.auth,GeoController.show);

module.exports=router;