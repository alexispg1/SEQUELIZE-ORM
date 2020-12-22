const jwt = require('jsonwebtoken');

const auth= async( req, res, next ) => {
    //obtener el authorization del header
    const authorization=req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }
    try {
        const token=authorization.split(" ")[1];
        const{uid} = jwt.verify(token,process.env.JWT_KEY );
        req.uid=uid;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }
}


module.exports = {
    auth
}


