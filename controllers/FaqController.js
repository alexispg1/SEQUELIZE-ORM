const Faq=require('../models/Faq');

const index=async(req,res)=>{
    try {
        let faq=await Faq.findAll();
        return res.json({
            ok:true,
            faq:faq
        })
    }catch (error) {
        return res.json({
            ok:false,
        })
    }
    
}

const show=async(req,res)=>{
    try {
        let faq=await Faq.findByPk(req.params.id);
        return res.json({
            ok:true,
            faq:faq
        });
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

module.exports={
    index,
    show
}