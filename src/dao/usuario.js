const Usuario = (application) => {
    const usuario = application.src.models.usuario;

    this.fetch = (quantidade, order) => {
        return usuario.findAll({
            limit: quantidade,
            order,
            attributes: [`id`, `nome`, `email`, `status`, `admin`, `criado_em`, `logado_em`],
            raw: true,
        }) 
    }

    this.findUserById = async (id) => {
        return usuario.findOne({
            where: {
                id
            },
            raw: true
        });
    }

    this.findUserByEmail = async (email) => {
        return usuario.findOne({
            where: {
                email
            },
            raw: true
        });
    }


    this.update = async (id, body) => {
        return usuario.update(body, {
            limit: 1,
            where: {
                id
            }
        });
    }

    return this;
}

module.exports = Usuario;