module.exports = (application) => {
    this.get = async(req, res) => {
        try {
            const usuarioDao = application.src.dao.usuario;
            
            var staff = await usuarioDao.findUserById(req.session.user.id);
            let usuario = await usuarioDao.findUserByEmail(req.params.email);
            req.session.banir = usuario;
            if (usuario) {
                
                res.render("admin/banirUsuario", { 
                    csrfToken: req.csrfToken(), 
                    error : req.flash("error"),
                    usuario,
                    staff,
                });
            }
        }
        catch(error) {
            console.log(error);
        }
    }
 
    this.post = async(req, res) => {
        try {
            const { restrito_em, motivo, nome_staff } = req.body;
            const old_user_data = req.session.banir;
            if (old_user_data) {
                const usuarioRestrincoesDao = application.src.dao.usuarioRestrincoes;
 
                usuarioRestrincoesDao.criar({
                    restrito_em : "LOGIN",
                    motivo,
                    staff: nome_staff,
                    tickdesban: 0,
                    usuarioId: old_user_data.id,
                })
 
                console.log("Banido com sucesso !")

                req.flash("sucesso", "Atualizado com sucesso!");
                res.redirect(old_user_data.email);
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