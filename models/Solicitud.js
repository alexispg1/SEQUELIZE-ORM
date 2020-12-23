const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Solicitud extends Model {}
Solicitud.init({ 
    estado_solicitud:{
        type: DataTypes.ENUM('p', 'r','c', 'i'),
        allowNull: false,
        defaultValue:"p",
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_solicitud solo puede contener  1na letras"
            }, 
        },
    },
    doc_cedula: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
         
    },
    doc_cert_antecedentes: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
         
    },
    mensaje_solicitud: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
         
    },
    doc_cv: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
         
    },
    doc_prof: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
         
    },
    estado_prof:{
        type: DataTypes.ENUM('p', 'r','c', 'i'),
        allowNull: false,
        defaultValue:"p",
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_solicitud solo puede contener  1na letras"
            }, 
        },
    },
    fecha_prof: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    mensaje_prof: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_dom: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    fecha_dom: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    mensaje_dom: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_prom: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    estado_prom: {
        type: DataTypes.ENUM('p', 'r','c', 'i'),
        allowNull: false,
        defaultValue:"p",
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_prom solo puede contener  1na letras"
            }, 
        },
    },
    fecha_prom: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    mensaje_prom: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_1: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_2: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_3: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_4: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_5: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_trans_6: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    }, 
    estado_trans: {
        type: DataTypes.ENUM('p', 'r','c', 'i'),
        allowNull: false,
        defaultValue:"p",
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_trans solo puede contener  1na letras"
            }, 
        },
    },
    fecha_trans: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    mensaje_trans: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    }, 
    tipo_profesional: {
        type: DataTypes.ENUM('domicilio', 'general','promocion', 'transporte', 'profesional_legal', 'profesional_salud', 'profesional_informatica'),
        allowNull: false,
        defaultValue:"domicilio",
        validate: {
            isAlpha: {
                args: true,
                msg: "El tipo_profesional no es de los disponibles"
            }, 
        },
    },
    fecha_pendiente: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
    fecha_revision: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null,
    }, 
    fecha_completa: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null,
    }, 
    fecha_incompleta: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null,
    }, 
    doc_emp_cedula: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_emp_estatuto: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_emp_cedula_rep: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    doc_emp_5: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    fecha_emp: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null,
    }, 
    estado_emp: {
        type: DataTypes.ENUM('p', 'r','c', 'i'),
        allowNull: false,
        defaultValue:"p",
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_trans solo puede contener  1na letras"
            }, 
        },
    },
    mensaje_emp: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null ,
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:null,
    },
    
     
}, {
    sequelize,
    modelName: "solicitud",
    timestamps: true
});

module.exports = Solicitud;
