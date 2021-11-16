const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");



module.exports = (application) => {

    this.registrar = async (req, res) => {
        const usuario = application.src.controllers.usuario; // Auto-Loader não carregou mas neste ponto ele carregou.
        try {
            console.log(req.method)
            if (req.method == "POST") {
                const { nome, email, senha, confirmar_senha } = req.body;   
                console.log(nome,email,senha)
                const errors = validationResult(req);
                if (errors.isEmpty()) { 
                    console.log("Usuario create",usuario)

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
                res.render("login/registro");
            }
        } catch (error) {
            console.log("Não foi possível registrar usuário em sync!\nERRO:"+error);
            res.redirect("/registrar");
        }
    }

    return this;
}