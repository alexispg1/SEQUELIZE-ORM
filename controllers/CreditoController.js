const Credito=require('../models/Credito');
const Usuario=require('../models/Usuario')

const index=async(req,res)=>{
    try {
        let credito=await Credito.findAll({
            attributes:['id','monto_credito'],
            include:[
                {
                    model:Usuario,
                    as:"usuario",
                    attributes:['nombre','apellido'],
                }
            ]
        });
        return res.json({
            ok:true,
            credito:credito
        })
    } catch (error) {
        return res.json({
            ok:false,
        })
    }
    
}

const show=async(req,res)=>{
    try {
        let credito=await Credito.findByPk(req.params.id)
        .then(credito=>{
            credito.getUsuario().then(usuario=>{
                let mi_credito={
                    credito:credito,
                    usuario:usuario.nombre+" "+usuario.apellido,
                }
                return res.json({
                    ok:true,
                    credito:mi_credito
                }).status(200);
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
        const credito=await Credito.create({
            monto_credito:req.body.monto_credito,
            usuario_id:req.uid.id
        })
        return res.json(
            {
                ok:true,
                credito:credito,
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
        let credito=await Credito.findByPk(req.params.id);
        
        credito.update({
            monto_credito:req.body.monto_credito,
        })
        await credito.save();
        return res.json(
            {
                ok:true,
                credito:credito
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
        let credito=await Credito.findByPk(req.params.id);
        await credito.destroy();
        return res.json(
            {
                ok:true,
                credito:credito
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