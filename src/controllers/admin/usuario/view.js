module.exports = (application) => {
    this.get = async(req, res) => {
        const usuarioDao = application.src.dao.usuario;
        usuarioDao.fetch(undefined, [
            ['id', 'desc']
        ]).then(usuarios => {
            res.render("admin/usuarios", { 
                csrfToken: req.csrfToken(), 
                error : req.flash("error"),
                usuarios
            });

            console.log(usuarios)
        }).catch(error => {
            console.log(error)
        }) 
    } 

    this.viewGET = async(req, res) => {
        try {
            const usuarioDao = application.src.dao.usuario;
            const artigoDao = application.src.dao.artigo;
            

            let usuario = await usuarioDao.findUserByEmail(req.params.email);
            console.log(usuario)
            if (usuario) {
                let artigos = await artigoDao.fetchByUsuarioId(usuario.id, undefined, [
                    ['id', 'desc']
                ]);

                res.render("admin/usuario", { 
                    csrfToken: req.csrfToken(), 
                    error : req.flash("error"),
                    usuario,
                    artigos
                });
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return this;
};