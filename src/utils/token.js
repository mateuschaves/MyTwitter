const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken(req, res, next){
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ 
                message: 'Token não informado.',
                error: true
            });
        
        jwt.verify(token, 'MYHASH', function(err, decoded) {
          if (err) return res.status(500).send({
                message: 'Falha na autenticação do token.',
                error: true
            });
          
          req.userId = decoded.id;
          next();
        });
      }
}