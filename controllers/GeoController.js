const Geo=require('../models/Geo');
const Usuario=require('../models/Usuario');

const index=async(req,res)=>{
    try {
        let geo=await Geo.findAll({
            attributes:['id','lat','log','geo_fecha','ubicacion','ciudad'],
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
            geo:geo
        })
    } catch (error) {
        return res.json({
            ok:false,
        })
    }
    
}

const show=async(req,res)=>{
    try {
        let geo=await Geo.findByPk(req.params.id)
        .then(geo=>{
            geo.getUsuario().then(usuario=>{
                let mi_geo={
                    geo:geo,
                    usuario:usuario.nombre+" "+usuario.apellido,
                }
                return res.json({
                    ok:true,
                    credito:mi_geo
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
        const geo=await Geo.create({
            lat:req.body.lat,
            log:req.body.log,
            geo_fecha:req.body.geo_fecha,
            ubicacion:req.body.ubicacion,
            ciudad:req.body.ciudad,
            usuario_id:req.uid.id
        })
        return res.json(
            {
                ok:true,
                geo:geo,
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
        let geo=await Geo.findByPk(req.params.id);
        geo.update({
            lat:req.body.lat,
            log:req.body.log,
            geo_fecha:req.body.geo_fecha,
            ubicacion:req.body.ubicacion,
            ciudad:req.body.ciudad,
        })
        await geo.save();
        return res.json(
            {
                ok:true,
                geo:geo
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
        let geo=await Geo.findByPk(req.params.id);
        await geo.destroy();
        return res.json(
            {
                ok:true,
                geo:geo
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