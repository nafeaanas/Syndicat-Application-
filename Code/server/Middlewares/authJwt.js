const jwt = require("jsonwebtoken");
const db = require("../Models");
const cookieParser = require('cookie-parser');
const User = db.user;

verifyToken = (req, res, next) => {
    // token in cookies
    let token = req.cookies.token;
    // console.log(token)
// decode token 
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        
        console.log(decoded.id)
        const user = await User.findById(decoded.id)
        // 6355a45f640907b74d14bcba
        if(user){
            req.user = user

        next();
    }
    else{ 
        return res.status(401).send({ message: "Unauthorized!" });
    }
    
});
};

    const authJwt = {
        verifyToken,
    };

module.exports = authJwt;
