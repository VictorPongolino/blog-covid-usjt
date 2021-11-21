
module.exports = (application) => {

    this.verificarRestrincao = (roleToCheck) => {
        return function(req, res, next) {
            const roleController = application.src.controllers.roles;
            try {
                roleToCheck = roleToCheck.toUpperCase().trim();
                let usuario = req.session.user;
                if (usuario) {
                    roleController.getByUserId(usuario.id)
                        .then(role => {
                            if (role) {
                                req.flash("error", "Não tem permissão suficiente!");
                                console.log(role);
                                res.render("role/error", { role });
                            } else {
                                return next();
                            }
                        })
                } else {
                    return next("Credênciais inválidas");
                }
            } catch (error) {
                return next(error);
            }
        }
    }

    return this;
}