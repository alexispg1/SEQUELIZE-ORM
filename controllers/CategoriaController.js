const { response } = require('express');
const { model } = require('../database/db');
const { associations } = require('../models/Categoria');
const Categoria=require('../models/Categoria');
const Subcategoria = require('../models/Subcategoria');

const index=async(req,res)=>{
    let categorias=await Categoria.findAll({
        attributes:['id','nombre_categoria','estado_categoria'],
        include:[
            {
                model:Subcategoria,
                as:"subcategorias",
                attributes:['nombre_subcategoria'],
            }
        ]
    });
    return res.json(categorias).status(200)
}

const show=async(req,res)=>{
    try {
        let categoria =await Categoria.findByPk(req.params.id)
        .then(categoria=>{
            categoria.getSubcategorias().then(subcategoria=>{
                let categoriax={
                    nombre_categoria:categoria.nombre_catagoria,
                    estado_categoria:categoria.estado_categoria,
                    subcategoria:subcategoria,
                }
                return res.json(categoriax).status(200);
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
        Categoria.create({
            nombre_categoria:req.body.nombre_categoria,
            estado_categoria:req.body.estado_categoria,
        })
        const categoria={
            ok:true,
            nombre_categoria:req.body.nombre_categoria,
            estado_categoria:req.body.estado_categoria
        }
        return res.json({categoria}).code(200);
    } catch (error) {
        return res.json({
            ok:false
        })
    }
    
}

const destroy=async(req,res)=>{
    try {
        const categoria =await Categoria.findByPk(req.params.id);
        const categori=await categoria.destroy(); 
        return res.json({
            ok:true,
            categoria:categoria
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
        let categoria =await Categoria.findByPk(req.params.id);
        categoria.update({
            nombre_categoria:req.body.nombre_categoria,
            estado_categoria:req.body.estado_categoria
        });
        await categoria.save();
        return res.json({
            ok:true,
            categoria
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

