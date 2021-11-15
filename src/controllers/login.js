const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");



module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.login = async (req, res) => {
        try {
            const { email, senha } = req.body;
            const error = validationResult(req);
            if (error.isEmpty()) {
                usuario.findOne({ 
                    where: {
                        email
                    }
                }).then(user => {
                    if (user != undefined) {
                        const resultadoHash = bcrypt.compareSync(senha, user.senha);
                        if (resultadoHash != false) {
                            req.session.user = {
                                id: user.id,
                                email,
                            }

                            console.log("Logado com sucesso!")

                        } else {
                            res.redirect("/login");
                        }
                    } else {
                        res.redirect("/login");
                    }
                }).catch(error => {

                });
            } else {
                res.redirect("/login");
            }
        } catch (error) {

        }
    }
}