const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Usuario extends Model { }
Usuario.init({

    rut: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,   
    },
    dv: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    clave: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:null,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
        },
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
        },
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    contrasenia:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    celular: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            isInt: {
                args: true,
                msg: "el celular tiene que ser un numero"
            },
            min: {
                args: 9,
                msg: "el numero de telefono tiene que ser imgual a 9 digitos"
            },
        }
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: {
                args: 1,
                msg: "el genero no puede ser mas grande que 1 caracter"
            },

        }
    },
    tipo_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: {
                args: 1,
                msg: "el tipo de usuario no puede ser mas grande que 1 caracter"
            },

        }
    },
    ap_pat: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null
    },  
    ap_mat: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            isAlpha: {
                args: true,
                msg: "ap_mat solo puede contener letras"
            },

        },
    },
    ocupacion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            isAlpha: {
                args: true,
                msg: "la ocupacion solo puede contener letras"
            },

        },
    },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'',
        validate: {
            max: {
                args: 1,
                msg: "el estado no puede ser mas grande que 1 caracter"
            },

        }
    },
    ultimo_log: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    tipo_registro: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            max: {
                args: 1,
                msg: "el tipo de registro no puede ser mas grande que 1 caracter"
            },

        }
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull:true, 
        defaultValue:null,
    },
    activacion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            isAlpha: {
                args: true,
                msg: "la activacion solo puede contener letras"
            },

        },
    },
    verificacion: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue:'0',
        
    },
    pass_token: {   
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    pass_restaurar: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue:'0',

    },
    giro: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        
    },
    rubro: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            max: {
                args: 1,
                msg: "rubro no puede ser mas grande que 1 caracter"
            },

        }

    },
}, {
    sequelize,
    modelName: "usuario",
    timestamps: true
});

module.exports = Usuario;