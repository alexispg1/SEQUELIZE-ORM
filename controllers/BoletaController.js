const Boleta=require('../models/Boleta');

const index=async(req,res)=>{
    let boletas=await Boleta.findAll();
    return res.json(boletas).status(200)
}

const show=async(req,res)=>{
    try {
        let boleta=await Boleta.findByPk(req.params.id);
        return res.json(boleta).status(200);  
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const create=async(req,res)=>{
    try{ 
        console.log("req",req.body)
        let boleta=await Boleta.create({
            monto_boleta:req.body.monto_boleta,
            estado_boleta:req.body.estado_boleta,
            fecha_boleta_s:req.body.fecha_boleta_s,
            fecha_boleta_i:req.body.fecha_boleta_i,
            fecha_boleta_p:req.body.fecha_boleta_p,
            documento:req.body.documento,
            mensaje_boleta:req.body.mensaje_boleta,
            usuario_id:req.uid.id
        });
        return res.json({
            ok:true,
            boleta:boleta,
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false
        })
    }
    
}

const destroy=async(req,res)=>{
    try {
        let boleta=await Boleta.findByPk(req.params.id);
        let bolet=await boleta.destroy(); 
        return res.json({
            ok:true,
            boleta:bolet,
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'boleta no encontrada'
        }).status(404);
    }
}

const update=async(req,res)=>{
    try {
        let boleta=await Boleta.findByPk(req.params.id);
        boleta.update({
            monto_boleta:req.body.monto_boleta,
            estado_boleta:req.body.estado_boleta,
            fecha_boleta_s:req.body.fecha_boleta_s,
            fecha_boleta_i:req.body.fecha_boleta_i,
            fecha_boleta_p:req.body.fecha_boleta_p,
            documento:req.body.documento,
            mensaje_boleta:req.body.mensaje_boleta,
        });
        await boleta.save();
        return res.json({
            ok:true,
            boleta:boleta
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'boleta no encontrada'
        }).status(404);
    } 
}


module.exports={
    index,
    show,
    create,
    destroy,
    update
}