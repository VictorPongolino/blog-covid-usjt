const {body, check} = require('express-validator');

module.exports = (application) => {
    const usuario = application.src.controllers.usuario;
    return {
            validadorSenha : [

                check("nome")
                    .exists()
                    .withMessage("Nome é requirido!")
                    .trim()
                    .isLength({min: 5, min: 50})
                    .withMessage("Nome de 5-50 caracteres !"),

                check("email")
                    .exists()
                    .withMessage("Email é requirido!")
                    .trim()
                    .isEmail()
                    .withMessage("Email inválido")
                    .custom(valor => {
                        return usuario.findUserByEmail(valor).then(valor => {
                            Promise.reject(`Email '${valor}' já existe!'`)
                        })
                }),

                check("senha")
                    .exists()
                    .withMessage("Senha é requirido!")
                    .trim()
                    .isLength({ min: 5, max: 15})
                    .withMessage("Senha deve ter de 5-10 caracteres !"),

                check("confirmar_senha")
                    .exists()
                    .withMessage("Confirme a senha!")
                    .notEmpty()     
                    .custom((valor, {req}) => {
                        if (value !== req.body.password) {
                            throw new Error('Senhas não são iguais!');
                          }

                          return true;
                    })
                    .withMessage("As senhas devem ser idênticas !"),
                
                
            ] 
        }
} 