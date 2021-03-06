
module.exports = (application) => {

    this.verificarRestrincao = (roleToCheck) => {
        return function(req, res, next) {
            const roleController = application.src.controllers.roles;
            try {
                roleToCheck = roleToCheck.trim();
                let usuario = req.session.user;
                if (usuario) { 
                    roleController.isUserRestrictedByRole(usuario.id, roleToCheck) 
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