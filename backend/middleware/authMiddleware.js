
const checkAuth = (req, res, next) => {
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        console.log('Si tiene el token con bearer');
    }

    const error = new Error('Token no Válido o inexistente');
    res.status(403).jsoN({msg: error.message});

    next();
}; 

export default checkAuth;