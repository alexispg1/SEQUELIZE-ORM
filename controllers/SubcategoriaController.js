const Subcategoria=require('../models/Subcategoria');
const Categoria=require('../models/Categoria');

const index=async(req,res)=>{
    try {
        let subcategoria=await Subcategoria.findAll({
            attributes:['id','nombre_subcategoria',
            'estado_subcategoria','doc_requeridos',
            'icono_subcategoria','fondo_subcategoria',
            'id_categoria'],
            include:[{
                model:Categoria,
                as:"categoria",
                attributes:['nombre_categoria']
            }]
        })  
        return res.json({
            ok:true,
            subcategoria
        })
    } catch (error) {
        return res.json({
            ok:false,
        })
    }
    
}

const show=async(req,res)=>{
    try {
        let subcategoria =await Subcategoria.findByPk(req.params.id)
        .then(subcategoria=>{
            subcategoria.getCategoria().then(categoria=>{
                let subcategoriax={
                    subcategoria:subcategoria,
                    categoria:categoria.nombre_categoria
                }
                return res.json(subcategoriax).status(200);
            });
        });
       
    } catch (error) {
        return res.json({
            ok:false,
        }).status(404);
    }
}

const create=async(req,res)=>{
    try {
        const subcategoria=await Subcategoria.create({
            nombre_subcategoria:req.body.nombre_subcategoria,
            estado_subcategoria:req.body.estado_subcategoria,
            doc_requeridos:req.body.doc_requeridos,
            icono_subcategoria:req.body.icono_subcategoria,
            fondo_subcategoria:req.body.fondo_subcategoria,
            id_categoria:req.body.id_categoria
        })
        return res.json(
            {
                ok:true,
                subcategoria
            }
        ).status(200);
    } catch (error) {
        return res.json({
            ok:false,
        })
    }
}

const update=async(req,res)=>{
    try {
        let subcategoria=await Subcategoria.findByPk(req.params.id);
        subcategoria.update({
            nombre_subcategoria:req.body.nombre_subcategoria,
            estado_subcategoria:req.body.estado_subcategoria,
            doc_requeridos:req.body.doc_requeridos,
            icono_subcategoria:req.body.icono_subcategoria,
            fondo_subcategoria:req.body.fondo_subcategoria, 
        })
        await subcategoria.save();
        return res.json(
            {
                ok:true,
                subcategoria
            }
        ),status(200);
    } catch (error) {
        res.json({
            ok:false,
        }).status(404);
    }
   

}

const destroy=async(req,res)=>{
    try {
        let subcategoria=await Subcategoria.findByPk(req.params.id);
        await subcategoria.destroy();
        return res.json(
            {
                ok:true,
                subcategoria
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