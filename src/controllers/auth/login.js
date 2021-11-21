
module.exports = (application) => {

    this.userLoggedMiddleware = function(req, res, next) {
        const user = application.src.controllers.usuario;
        try {
            let userSession = req.session.user;
            if (userSession) {
                user.get(userSession.id)
                    .then(usuario => {
                        if (usuario) {
                            return next();
                        } else {
                            req.flash("error", "Logue-se primeiro para acessar este conteúdo!");
                            res.redirect("/login");
                        }
                    })
                    .catch(error => {
                        return next(error);
                    })
            } else {
                req.flash("error", "Logue-se primeiro para acessar este conteúdo!");
                res.redirect("/login");
            }
        } catch (error) {
            return next(error);
        }
    }

    return this;
}