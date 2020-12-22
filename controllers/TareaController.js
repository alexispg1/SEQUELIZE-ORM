const Tarea=require('../models/Tarea');
const Subcategoria=require('../models/Subcategoria');
const index=async(req,res)=>{
    let tareas=await Tarea.findAll({
        include:[
            {
                model:Subcategoria,
                as:"subcategoria",
                attributes:['nombre_subcategoria'],
            }
        ]
    });
    return res.json(tareas).status(200)
}

const show=async(req,res)=>{
    try {
        let tarea =await Tarea.findByPk(req.params.id)
        .then(tarea=>{
            tarea.getSubcategoria().then(subcategoria=>{
                let tareax={
                    tarea:tarea,
                    'subcategoria':subcategoria.nombre_subcategoria,
                }
                return res.json(tareax).status(200);
            });
        });
       
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const create=async(req,res)=>{

    try{ 
        let tarea=await Tarea.create({
            nombre_tarea:req.body.nombre_tarea,
            costo_tarea:req.body.costo_tarea,
            nombre_largo_tarea:req.body.nombre_largo_tarea,
            icono_tarea:req.body.icono_tarea,
            fondo_tarea:req.body.fondo_tarea,
            descripcion_tarea:req.body.descripcion_tarea,
            estado_tarea:req.body.estado_tarea,
            id_subcategoria:req.body.id_subcategoria,
        });

        const categoria={
            ok:true,
            tarea:tarea,
        }
        return res.json(categoria).status(200);
    } catch (error) {
        return res.json({
            ok:false
        })
    }
    
}

const destroy=async(req,res)=>{
    try {
        let tarea =await Tarea.findByPk(req.params.id);
        let tare=await tarea.destroy(); 
        return res.json({
            ok:true,
            tarea:tare,
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'categoria no encontrada'
        }).status(404);
    }
}

const update=async(req,res)=>{
    try {
        let tarea =await Tarea.findByPk(req.params.id);
        tarea.update({
            nombre_tarea:req.body.nombre_tarea,
            costo_tarea:req.body.costo_tarea,
            nombre_largo_tarea:req.body.nombre_largo_tarea,
            icono_tarea:req.body.icono_tarea,
            fondo_tarea:req.body.fondo_tarea,
            descripcion_tarea:req.body.descripcion_tarea,
            estado_tarea:req.body.estado_tarea,
        });
        await tarea.save();
        return res.json({
            ok:true,
            tarea:tarea
        }).status(200);
    } catch (error) {
        return res.json({
            ok:false,
            message:'categoria no encontrada'
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