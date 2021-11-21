const {check} = require('express-validator');

module.exports = (application) => {
    const usuario = application.src.controllers.usuario;
    return {
            validadorSenha : [

                check("nome")
                    .exists()
                    .withMessage("Nome é requirido!")
                    .trim()
                    .isLength({min: 5, max: 50})
                    .withMessage("Nome de 5-50 caracteres !"),

                check("email")
                    .exists()
                    .withMessage("Email é requirido!")
                    .trim()
                    .isEmail()
                    .withMessage("Email inválido")
                    .custom(valor => {
                        return usuario.findUserByEmail(valor).then(valor => {
                            if (valor !== null) {
                                let user = valor.dataValues;
                                return Promise.reject(`Email '${user.email}' já existe!'`)
                            }

                            return true;
                        });
                }),

                check("senha")
                    .exists()
                    .withMessage("Senha é requirido!")
                    .trim()
                    .isLength({min: 5, max: 15})
                    .withMessage("Limite de caracteres é de 5-15 !"),


                check("confirmar_senha")
                    .exists()
                    .withMessage("Confirme a senha!")
                    .notEmpty()     
                    .custom((valor, {req}) => {
                        if (valor !== req.body.senha) {
                            throw new Error('Senhas não são iguais!');
                        }

                        return true;
                    })
                    .withMessage("As senhas devem ser idênticas !"),
                
                
            ] 
        }
} 