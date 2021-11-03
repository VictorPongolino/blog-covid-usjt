module.exports = (application) => {
    const artigo = application.src.models.artigo;

    this.getFirst5 = async (req, res) => {
        try {
            const resultado = await artigo.findAll({
                limit: 5,
                attributes: ["titulo", "descricao", "body"],
                order: [
                    ['id', 'DESC']
                ]
            }).then(resultado => {
                res.render("home/index", {
                    noticias: resultado
                });
            }).catch(erro => {
                console.error(`Falha no retorno dos artigos (async) ${erro}`);
            })
        } catch (error) {
            console.error(`Falha ao tentar buscar artigos (sync) ${error}`);
        }
    }

    return this;
};