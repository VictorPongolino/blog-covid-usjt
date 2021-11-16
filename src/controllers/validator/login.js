const {check} = require('express-validator');

module.exports = (application) => {
    return {
            validadorLogin : [

                check("email")
                    .exists()
                    .withMessage("Email é requirido!")
                    .trim()
                    .isEmail()
                    .withMessage("Email inválido"),
 
                check("senha")
                    .exists()
                    .withMessage("Senha inválida!")
                    .trim()
                    .isLength({min: 5, max: 15})
                    .withMessage("Senha inválida!"),
                
            ] 
        }
} 