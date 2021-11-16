const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = (application) => { 
    this.login = async (req, res) => {
        try {
            const usuario = application.src.controllers.usuario; // Auto-Loader não carregou mas neste ponto ele carregou.
            if (req.method == "POST") {
                const { email, senha } = req.body;
                const error = validationResult(req);
                if (error.isEmpty()) {
                    usuario.findUserByEmail(email).then(user => {
                        if (user !== null) {
                            const isSenhaIgual = bcrypt.compareSync(senha, user.senha);
                            if (isSenhaIgual) {
                                req.session.user = {
                                    id: user.id,
                                    email: user.email
                                }
                                console.log("Logado com sucesso!");
                            } else {
                                res.redirect("/login");
                            }
                        } else {
                            res.redirect("/login");
                        }
                    }).catch(error => {
                        console.log("Não foi possível logar usuário async!\n" + error)
                    })
                } else {
                    console.log(error);
                    res.redirect("/login");
                }
            } else {
                res.render("login/login", { csrfToken: req.csrfToken() });
            }
        } catch (error) {
            req.flash("error", "Não foi possível continuar com a operação devido a um erro, tente novamente !");
            console.log("Não foi possível logar usuário sync!\n" + error)
        }
    }
    return this;
}