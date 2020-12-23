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
Boleta.hasOne(BoletaTarea,{foreignKey:"id_boleta"});
BoletaTarea.belongsTo(Boleta,{foreignKey:"id_boleta"});
//una boleta tarea tiene una tarea solicitda y una tarea solicitada pertenece a una boleta tarea 
BoletaTarea.hasOne(TareaSolicitada,{foreignKey:"id_boleta_tarea"});
TareaSolicitada.belongsTo(BoletaTarea,{foreignKey:"id_boleta_tarea"});
//22-12-2020 ,una categoria tiene una o mas subcategorias una subcategoria pertenece a una categoria
Categoria.hasMany(Subcategoria,{as:"subcategorias",foreignKey:"id_categoria"});
Subcategoria.belongsTo(Categoria,{as:"categoria",foreignKey:"id_categoria"});
//22-12-2020 ,una subcategoria tiene una o mas tarea una tarea pertenece a una subcategoria
Subcategoria.hasMany(Tarea,{as:"tareas",foreignKey:"id_subcategoria"});
Tarea.belongsTo(Subcategoria,{as:"subcategoria",foreignKey:"id_subcategoria"});




