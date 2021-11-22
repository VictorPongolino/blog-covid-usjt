const Artigo = (application) => {
    const artigo = application.src.models.artigo;

    this.fetchByUsuarioId = (usuarioId, quantidade, order) => {
        return artigo.findAll({
            limit: quantidade,
            where: {
                usuarioId
            }.
            order,
            raw: true,
        }) 
    }

    return this;
}

module.exports = Artigo;