const CategoriaUsuario=require('../models/CategoriaUsuario');


const index=async(req,res)=>{
    try {
        let categoriaUsuario=await CategoriaUsuario.findAll();
        return res.json({
            ok:true,
            categoriaUsuario:categoriaUsuario
        })
    } catch (error) {
        return res.json({
            ok:false,
        })
    }
    
}

const show=async(req,res)=>{
    try {
        let categoriaUsuario =await CategoriaUsuario.findByPk(req.params.id);
        return res.json({
            ok:true,
            categoriaUsuario:categoriaUsuario
        })
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const create=async(req,res)=>{
    try {
        const categoriaUsuario=await CategoriaUsuario.create({
            estado_tarea:req.body.estado_tarea,
            usuario_id:req.uid.id
           
        })
        return res.json(
            {
                ok:true,
                categoriaUsuario:categoriaUsuario,
            }
        ).status(200);
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const update=async(req,res)=>{
    try {
        let categoriaUsuario=await CategoriaUsuario.findByPk(req.params.id);
        categoriaUsuario.update({
            estado_tarea:req.body.estado_tarea,
        })
        await categoriaUsuario.save();
        return res.json(
            {
                ok:true,
                categoriaUsuario:categoriaUsuario
            }
        ).status(200);
    } catch (error) {
        res.json({
            ok:false,
        }).status(404);
    }
   

}

const destroy=async(req,res)=>{
    try {
        let categoriaUsuario=await CategoriaUsuario.findByPk(req.params.id);
        await categoriaUsuario.destroy();
        return res.json(
            {
                ok:true,
                categoriaUsuario:categoriaUsuario
            }
        ).status(200);  
    } catch (error) {
        res.json({
            ok:false,
        }).status(404);  
    }
}

module.exports={
    create,
    update,
    destroy,
    index,
    show
}