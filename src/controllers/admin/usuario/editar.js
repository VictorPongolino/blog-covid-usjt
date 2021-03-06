module.exports = (application) => {
    this.get = async(req, res) => {
        try {
            const usuarioDao = application.src.dao.usuario;
            const usuarioRestrincoes = application.src.dao.usuarioRestrincoes;

            let usuario = await usuarioDao.findUserByEmail(req.params.email);
            req.session.edit = usuario;
            if (usuario) {
                let bannedInfo = await usuarioRestrincoes.isUserRestrictedByRole(usuario.id, "LOGIN");

                res.render("admin/editarUsuario", { 
                    csrfToken: req.csrfToken(), 
                    error : req.flash("error"),
                    usuario,
                    bannedInfo
                });
            }
        }
        catch(error) {
            console.log(error);
        }
    }
 
    this.post = async(req, res) => {
        try {
            const { nome, email } = req.body;
            const old_user_data = req.session.edit;
            if (old_user_data) {
                const usuarioDao = application.src.dao.usuario;

                usuarioDao.update(old_user_data.id, {
                    nome,
                    email
                })
 
                console.log("Atualizado com sucesso!")

                req.flash("sucesso", "Atualizado com sucesso!");
                res.redirect(email);
            } else {
                req.flash("error", ["Não foi possível encontrar o usuário a ser editado!"]);
                console.log("Não há sessão referente ao usuário a ser atualizado, ataque?")
                res.redirect("/");
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return this;
};