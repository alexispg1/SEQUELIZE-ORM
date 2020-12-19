const jwt = require('jsonwebtoken');


const generarJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {
        const payload = { uid };    
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, ( err, token ) => {

            if ( err ) {
                // no se pudo crear el token
                reject('No se pudo generar el JWT ',err);
                console.log("perro ",err)

            } else {
                // TOKEN!
                resolve( token );
            }

        })

    });


}


module.exports = {
    generarJWT
}