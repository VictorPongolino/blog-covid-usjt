const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");



module.exports = (application) => {

    this.registrar = async (req, res) => {
        const usuario = application.src.controllers.usuario;
        try {
            console.log(req.method)
            if (req.method == "POST") {
                const { nome, email, senha, confirmar_senha } = req.body;   
                const errors = validationResult(req);
                if (errors.isEmpty()) { 
                    await usuario.create({
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