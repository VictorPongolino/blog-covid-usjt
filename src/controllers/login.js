const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = (application) => { 
    this.login = async (req, res) => {
        try {
            const usuario = application.src.controllers.usuario; // Auto-Loader não carregou mas neste ponto ele carregou.
            const role = application.src.controllers.roles;
            if (req.method == "POST") {
                const { email, senha } = req.body;
                const error = validationResult(req);
                if (error.isEmpty()) {
                    usuario.findUserByEmail(email).then(user => {
                        if (user !== null) {
                            const isSenhaIgual = bcrypt.compareSync(senha, user.senha);
                            if (isSenhaIgual) {
                                role.isUserRestrictedByRole(user.id, "LOGIN")
                                    .then(getRole => {
                                        if (getRole) {
                                            req.flash("error", "Sua conta encontra-se bloqueada, entre suporte para mais info !");
                                            res.redirect("/login");
                                        } else {
                                            req.session.user = {
                                                id: user.id,
                                                email: user.email
                                            }

                                            res.redirect("/");
                                        }
                                    })
                                    .catch(error => {
                                        res.redirect("/");
                                    })
                            } else {
                                req.flash("error", "Usuário ou senha incorretos !");
                                res.redirect("/login");
                            }
                        } else {
                            req.flash("error", "Usuário ou senha incorretos !");
                            res.redirect("/login");
                        }
                    }).catch(error => {
                        req.flash("error", "Não foi possível continuar com a operação devido a um erro, tente novamente !");
                        console.log("Não foi possível logar usuário async!\n" + error)
                    })
                } else {
                    req.flash("error", error.array().map(x => x.msg));
                    res.redirect("/login");
                }
            } else {
                res.render("login/login", { 
                    csrfToken: req.csrfToken(), 
                    error : req.flash("error")
                });
            }
        } catch (error) {
            req.flash("error", "Não foi possível continuar com a operação devido a um erro, tente novamente !");
            console.log("Não foi possível logar usuário sync!\n" + error)
        }
    }
    return this;
}