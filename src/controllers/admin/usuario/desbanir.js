module.exports = (application) => {
    this.get = async(req, res) => {
        try {
            const usuarioDao = application.src.dao.usuario;
            
            let usuario = await usuarioDao.findUserByEmail(req.params.email);
            if (usuario) {
                const usuarioRestrincoes = application.src.dao.usuarioRestrincoes;
                usuarioRestrincoes.deleteByUserAndRole(usuario.id, "LOGIN");
                res.redirect("/editar")
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return this;
};