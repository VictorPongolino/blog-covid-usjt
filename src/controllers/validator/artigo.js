
const {body, checkSchema, validationResult} = require('express-validator');
module.exports = {
    titulo: {
        notEmpty: {
            errorMessage: 'Título é necessário!'
        },

        isString: {
            errorMessage: 'Este título não parece correto!'
        },

        isLength: {
            errorMessage: "Título deve conter de 15 a 100 caracteres !",
            options: { min: 15, max: 100},
        }
    },

    descricao: {
        notEmpty: {
            errorMessage: 'Descrição é necessário!'
        },

        isString: {
            errorMessage: 'Esta descrição não parece correto!'
        },

        isLength: {
            errorMessage: "Descrição deve conter de 50 a 250 caracteres !",
            options: { min: 50, max: 250},
        },
    },

    textarea_blog: {
        notEmpty: {
            errorMessage: 'Descrição é necessário!'
        },

        isLength: {
            errorMessage: "Descrição deve conter de 500 a 50000 caracteres !",
            options: { min: 10, max: 50000},
            // options: { min: 500, max: 50000},
        },
    }
}