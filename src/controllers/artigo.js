const { validationResult } = require("express-validator");
const { default: slugify } = require("slugify");

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


    this.criar = async (req, res) => {
        res.render("artigo/criar", { csrfToken: req.csrfToken() });
    }

    this.enviar = async (req, res) => {
        try {
            const { titulo, descricao, textarea_blog } = req.body;
            const errors = validationResult(req);
            if (errors.isEmpty() == false) {
                console.log(errors.array()); //  TODO: Criar um erro por flash (cookies)     
                return;
            }

            artigo.create({
                /* Recomenda-se a nomeação explícita dos nomes das colunas no JSON para evitar problemas caso haver alteração 
                    no nome das variáveis no HTML 
                */

                titulo: titulo,
                descricao: descricao,
                slug: slugify(titulo, { lower: true, trim: true }),
                body: textarea_blog,
            })
                .then(valor => {
                    res.redirect("/");
                }).catch(error => {
                    console.log("Não foi possível criar um artigo (async)\n" + error)
                    res.sendStatus(500);
                });

        } catch (error) {
            console.log("Não foi possível criar um artigo (sync)\n" + error)
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