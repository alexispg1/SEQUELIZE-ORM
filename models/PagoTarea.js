const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class PagoTarea extends Model {}
PagoTarea.init({ 
    tipo_pago: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            }
        },
    },
    verificar_pago : {
        type: DataTypes.ENUM('0', '1' ),
        allowNull: false,
        defaultValue:'1',
        validate: {
            isAlpha: {
                args: true,
                msg: "verificar_pago es de tipo string y acepta 0 o 1"
            }, 
        },
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    payment_id: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    },
    payment_url: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    },
    factura: {
        type: DataTypes.ENUM('0', '1' ),
        allowNull: false,
        defaultValue:'1',
        validate: {
            isAlpha: {
                args: true,
                msg: "factura es de tipo string y acepta 0 o 1"
            }, 
        },
    },
    estado_documento_electronico:{
        type: DataTypes.ENUM('0', '1' ),
        allowNull: false,
        defaultValue:'1',
        validate: {
            isAlpha: {
                args: true,
                msg: "estado_documento_electronico es de tipo string y acepta 0 o 1"
            }, 
        },
    },
    numero_boleta_electronica: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
                                                                                                                             
    }, 
     
}, {
    sequelize,
    modelName: "pago_tarea",
    timestamps: true
});

module.exports = PagoTarea;
