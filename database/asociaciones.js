const Boleta = require('../models/Boleta');
const BoletaTarea = require('../models/BoletaTarea');
const Calificacion = require('../models/Calificacion');
const Categoria  = require('../models/Categoria');
const CategoriaUsuario = require('../models/CategoriaUsuario');
const Credito = require('../models/Credito');
const Faq  = require('../models/Faq');
const Geo = require('../models/Geo');
const ImagenUsuario = require('../models/ImagenUsuario');
const Ofertar = require('../models/Ofertar');
const OfertarTarea = require('../models/OfertarTarea');
const PagoTarea = require('../models/PagoTarea');
const Solicitud = require('../models/Solicitud');
const Subcategoria = require('../models/Subcategoria');
const Tarea = require('../models/Tarea');
const TareaAntecedente = require('../models/TareaAntecedente');
const TareaSolicitada = require('../models/TareaSolicitada');
const transferencia = require('../models/transferencia');
const Usuario = require('../models/Usuario');
const UsuarioCal = require('../models/UsuarioCal');

// un usuario tiene una o muchas boletas y una boleta pertenece a un usuario
Usuario.hasMany(Boleta,{foreignKey:"usuario_id"});
Boleta.belongsTo(Usuario,{
    foreignKey:{ 
        name:'usuario_id'
    }
});
//una boleta tiene  a una boleta tarea y una boleta tarea pertenece a una boleta
Boleta.hasOne(BoletaTarea,{foreignKey:"id_boleta_tarea"});
BoletaTarea.belongsTo(Boleta);

//una tarea solicitada tiene una boleta tarea y una boleta tarea  pertenece una tarea solicitada 
TareaSolicitada.hasOne(BoletaTarea);
BoletaTarea.belongsTo(TareaSolicitada);


//22-12-2020 ,una tarea tiene una o mas subcategorias una subcategoria pertenece a una tarea
Categoria.hasMany(Subcategoria,{as:"subcategorias",foreignKey:"id_categoria"});
Subcategoria.belongsTo(Categoria,{as:"categoria",foreignKey:"id_categoria"});






