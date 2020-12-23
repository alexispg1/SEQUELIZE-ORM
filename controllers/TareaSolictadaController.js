const TareaSolicitada=require('../models/TareaSolicitada');


const index=async(req,res)=>{
    let tareaSolicitada=await TareaSolicitada.findAll();
    return res.json(
        {
            ok:true,
            TareaSolicitada:tareaSolicitada
        }
    ).status(200);
}

const show=async(req,res)=>{
    try {
        let tareaSolicitada=await TareaSolicitada.findByPk(req.params.id);
        return res.json(
            {
                ok:true,
                TareaSolicitada:tareaSolicitada
            }
        ).status(200);
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const create=async(req,res)=>{

    try{ 
        let tareaSolicitada=await TareaSolicitada.create({
            lat_c:req.body.lat_c,
            lon_c:req.body.lon_c,
            estado:req.body.estado,
            estado_tasker:req.body.estado_tasker,
            fecha_s:req.body.fecha_s,
            fecha_p:req.body.fecha_p,
            fecha_a:req.body.fecha_a,
            fecha_a_1:req.body.fecha_a_1,
            fecha_a_2:req.body.fecha_a_2,
            fecha_c:req.body.fecha_c,
            fecha_e:req.body.fecha_e,
            ciudad:req.body.ciudad,
            direccion:req.body.direccion,
            esp:req.body.esp,
            esp2:req.body.esp2,
            tipo_solicitud:req.body.tipo_solicitud,
            monto:req.body.monto,
            horas:req.body.horas,
            codigo_p:req.body.codigo_p,
            id_boleta_tarea:req.body.id_boleta_tarea
        });
        return res.json({
            ok:true,
            TareaSolicitada:tareaSolicitada           
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false
        })
    }
    
}

const destroy=async(req,res)=>{
    try {
        let tareaSolicitada=await TareaSolicitada.findByPk(req.params.id);
        let tarea_solicitada=await tareaSolicitada.destroy(); 
        return res.json({
            ok:true,
            TareaSolicitada:tarea_solicitada,
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'tarea solicitada no encontrada'
        }).status(404);
    }
}

const update=async(req,res)=>{
    try {
        let tareaSolicitada =await TareaSolicitada.findByPk(req.params.id);
        tareaSolicitada.update({
            lat_c:req.body.lat_c,
            lon_c:req.body.lon_c,
            estado:req.body.estado,
            estado_tasker:req.body.estado_tasker,
            fecha_s:req.body.fecha_s,
            fecha_p:req.body.fecha_p,
            fecha_a:req.body.fecha_a,
            fecha_a_1:req.body.fecha_a_1,
            fecha_a_2:req.body.fecha_a_2,
            fecha_c:req.body.fecha_c,
            fecha_e:req.body.fecha_e,
            ciudad:req.body.ciudad,
            direccion:req.body.direccion,
            esp:req.body.esp,
            esp2:req.body.esp2,
            tipo_solicitud:req.body.tipo_solicitud,
            monto:req.body.monto,
            horas:req.body.horas,
            codigo_p:req.body.codigo_p
        });
        await tareaSolicitada.save();
        return res.json({
            ok:true,
            TareaSolicitada:tareaSolicitada
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'tarea solicitada no encontrada no encontrada'
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