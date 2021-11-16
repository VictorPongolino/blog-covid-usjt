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
                            console.log("Encontrado!")
                        } else {
                            console.log("Não encontrado usuário!")
                            res.redirect("/login");
                        }
                    })
                } else {
                    console.log(error.array());
                    res.redirect("/login");
                }
            } else {
                res.render("login/login");
            }
        } catch (error) {
            console.log("Não foi possível logar usuário!\n" + error)
        }
    }
    return this;
}