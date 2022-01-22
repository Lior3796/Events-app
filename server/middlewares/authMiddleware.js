const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(req.cookies.jwt);
    if (req.cookies.jwt) {
        jwt.verify(token, "solo secret", (err, encodedToken) => {
            if (err) {
                console.log(err);
                res.json({ access: "can't have access to login" }).status(301);
            }
            else {
                next();
                return;
            }
        })
    }
    else {
        res.redirect("/login")
    }
}
module.exports = { authMiddleware }