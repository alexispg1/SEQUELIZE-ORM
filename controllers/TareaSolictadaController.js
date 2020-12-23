const TareaSolicitada=require('../models/TareaSolicitada');


const index=async(req,res)=>{
    let BoletaTareas=await BoletaTarea.findAll();
    return res.json(
        {
            ok:true,
            boletaTarea:BoletaTareas
        }
    ).status(200);
}

const show=async(req,res)=>{
    try {
        let boletaTarea =await BoletaTarea.findByPk(req.params.id);
        return res.json(
            {
                ok:true,
                boletaTarea:boletaTarea
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
        let boletaTarea=await BoletaTarea.create({
            id_boleta:req.body.id_boleta,
        });
        return res.json({
            ok:true,
            boletaTarea:boletaTarea            
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false
        })
    }
    
}

const destroy=async(req,res)=>{
    try {
        let boletaTarea=await BoletaTarea.findByPk(req.params.id);
        let boleta_tarea=await boletaTarea.destroy(); 
        return res.json({
            ok:true,
            boletaTarea:boleta_tarea,
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'boleta tarea no encontrada'
        }).status(404);
    }
}

const update=async(req,res)=>{
    try {
        let boletaTarea =await BoletaTarea.findByPk(req.params.id);
        boletaTarea.update({
            id_boleta:req.body.id_boleta,
        });
        await boletaTarea.save();
        return res.json({
            ok:true,
            boletaTarea:boletaTarea
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'boleta tarea no encontrada'
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