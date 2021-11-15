const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");



module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.registrar = async (req, res) => {
        try {
            const { nome, email, senha } = req.body;
            const errors = validationResult(req.body);
            if (errors.isEmpty()) {
                usuario.create({
                    nome,
                    email,
                    senha: bcrypt.hashSync(senha, bcrypt.genSaltSync(10))
                });
                console.log("Registrado com sucesso!");
                
                req.session.user = {
                    id: usuario.id,
                    email
                }

            } else {
                res.redirect("/");
            }
        } catch (error) {
            console.log("Não foi possível registrar usuário em sync!\n"+error);
            res.redirect("/");
        }
    }
}