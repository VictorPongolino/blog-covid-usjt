
module.exports = (application) => {
    const user = application.src.controllers.usuario;
    this.userLoggedMiddleware = function(req, res, next) {
        try {
            let userId = req.session.user;
            if (userId) {
                user.get(userId)
                    .then(usuario => {
                        if (usuario) {
                            return next();
                        } else {
                            res.redirect("/login");
                        }
                    })
                    .catch(error => {
                        return next(error);
                    })
            } else {
                res.redirect("/login");
            }
        } catch (error) {
            return next(error);
        }
    }

    return this;
}