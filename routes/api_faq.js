const express=require('express');
const router=express.Router();

const FaqController=require('../controllers/FaqController');
const Authorization=require('../middlewares/validar-jwt');


router.get('/mis/faqs',Authorization.auth,FaqController.index);
router.get('/mi/faq/:id',Authorization.auth,FaqController.show);

module.exports=router;