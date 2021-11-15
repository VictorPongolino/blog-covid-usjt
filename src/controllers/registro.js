const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");



module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.registrar = async (req, res) => {
        try {
            console.log(req.method)
            if (req.method == "POST") {
                const { nome, email, senha, confirmar_senha } = req.body;   
                const errors = validationResult(req);
                if (errors.isEmpty()) { 
                    console.log("ENTREIEIIIII")
                    // await usuario.create({
                    //     nome,
                    //     email,
                    //     senha: bcrypt.hashSync(senha, bcrypt.genSaltSync(10))
                    // });
                    // console.log("Registrado com sucesso!");
                    
                    // req.session.user = {
                    //     id: usuario.id,
                    //     email
                    // }

                } else {
                    console.log("ERROSSSSS",errors.array());
                    res.redirect("/");
                }
            } else {
                res.render("login/registro");
            }
        } catch (error) {
            console.log("Não foi possível registrar usuário em sync!\nERRO:"+error);
            res.redirect("/");
        }
    }

    return this;
}