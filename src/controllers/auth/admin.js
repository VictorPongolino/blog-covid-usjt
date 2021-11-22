
module.exports = (application) => {
    this.checkAdminLevel = (nivel) => {
        return (req, res, next) => {
            try {
                const roleController = application.src.controllers.roles;
                let user = req.session.user;
                if (nivel && user) {
                    roleController.get(user.id)
                        .then(usuario => {
                            if (usuario) {
                                const adminLevel = user.admin;
                                if (adminLevel >= nivel) {
                                    return next();
                                } else {
                                    res.redirect("/");
                                }
                            }
                        })
                        .catch(error => {
                            res.redirect("/");
                        })
                } 
            } catch (error) {
                res.redirect("/");
            }
        }
    }

    return this;
}

