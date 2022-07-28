function guestMiddlewares(req,res,next){
if (req.session.userLogged){
    return res.redirect("user")
}
next();
}


module.exports = guestMiddlewares