const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const flash = require('connect-flash');



module.exports = (application) => {

    this.registrar = async (req, res) => {
        const usuario = application.src.controllers.usuario; // Auto-Loader não carregou mas neste ponto ele carregou.
        try {
            if (req.method == "POST") {
                const { nome, email, senha } = req.body;   
                const errors = validationResult(req);
                if (errors.isEmpty()) { 
                    usuario.criar({
                        nome,
                        email,
                        senha: bcrypt.hashSync(senha, bcrypt.genSaltSync(10)),
                    })
                        .then(valor => { 
                            if (valor) {
                                console.log("Registrado com sucesso!");
                            
                                req.session.user = {
                                    id: usuario.id,
                                    email
                                }

                                res.redirect("/");
                            } else {
                                Promise.reject("Não foi devolvido a entidade criada !");
                            }
                        }).catch(error => {
                            console.log("Não foi possível registrar usuário em async!\nERRO:"+error);
                            res.redirect("/registrar");
                        })
                    
                } else {
                    console.log(errors.array());
                    res.redirect("/registrar");
                }
            } else {
                res.render("login/registro", { csrfToken: req.csrfToken() });
            }
        } catch (error) {
            console.log("Não foi possível registrar usuário em sync!\nERRO:"+error);
            res.redirect("/registrar");
        }
    }

    return this;
}