module.exports = (application) => {
    const artigo = application.src.models.artigo;

    this.getFirst5 = async (req, res) => {
        try {
            artigo.findAll({
                limit: 5,
                attributes: ["titulo", "descricao", "body", "slug"],
                where: {
                    status: "APROVADO"
                },
                order: [
                    ['id', 'DESC']
                ]
            }).then(resultado => {
                res.render("home/index", {
                    noticias: resultado
                });
            }).catch(erro => {
                console.error(`Falha no retorno dos artigos (async) ${erro}`);
                res.sendStatus(500);
            })
        } catch (error) {
            console.error(`Falha ao tentar buscar artigos (sync) ${error}`);
            res.sendStatus(500);
        }
    }

    this.getBySlug = async (req, res) => {
        try {
            const { slug } = req.params;
            artigo.findOne({
                attributes: ["titulo", "descricao", "body"],
                where: {
                    slug
                }
            }).then(resultado => {
                res.render("artigo/artigo", { 
                    artigo: resultado.dataValues
                });
            }).catch(erro => {
                console.error(`Falha no retorno de um artigo (async) ${erro}`);
                res.sendStatus(500);
            })
        } catch (error) {
            console.error(`Falha ao tentar buscar um artigo (sync) ${error}`);
            res.sendStatus(500);
        }
    }


    this.update = async (req, res) => {
        try {
            const { id } = req.params;
            artigo.update(req.body,
            {
                limit: 1,
                where: {
                    id
                }
            }).then(resultado => {
                res.sendStatus(200);
                /* TODO */
            }).catch(erro => {
                console.error(`Falha na tentativa de atualizar um artigo (async) ${erro}`);
                res.sendStatus(500);
            })
        } catch (error) {
            console.error(`Falha na tentativa de atualizar um artigo (sync) ${error}`);
            res.sendStatus(500);
        }
    }


    this.deletar = async (req, res) => {
        try {
            const { id } = req.params;
            artigo.update({
                status: "DELETADO", 
            },
            {
                limit: 1,
                where: {
                    id
                }
            }).then(resultado => {
                res.sendStatus(200);
                /* TODO */
            }).catch(erro => {
                console.error(`Falha na tentativa de deletar um artigo (async) ${erro}`);
                res.sendStatus(500);
            })
        } catch (error) {
            console.error(`Falha na tentativa de deletar um artigo (sync) ${error}`);
            res.sendStatus(500);
        }
    }


    return this;
};