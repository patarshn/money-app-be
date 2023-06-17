var jwt = require('jsonwebtoken');

module.exports = {
    validate : async (req, res, done) => {
        try{
            const bearer = req.headers.authorization
            const token = bearer.split(" ")[1]
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded) {
                res.locals.userId = decoded.id
                return done(null, decoded);
            }
        }catch(err){
            console.log(err);
            return done(res.status(401).json({success: false, message: "Unauthorize", data: null}));
        }
    },
}