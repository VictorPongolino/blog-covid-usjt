const { Sequelize } = require('sequelize');

module.exports = (application) => {
    const sequelize = application.src.models.sequelize;
    return sequelize.define("usuario", {

        id: { 
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true 
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { 
                len: [5,30],
                msg: "Nome deve ser de 5 a 30 caracteres"
            }
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: { 
                len: [5,100],
                isEmail: {
                    msg: "Email inválido"
                },
                msg: "Email de 5 a 100 caracteres"
            }
        },

        senha: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { 
                len: [5,15],
                msg: "Senha deve conter de 5 a 15 caracteres"
            }
        },

        status: { 
            type: Sequelize.INTEGER, 
            defaultValue: 0
        },

        criado_em: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },

        logado_em: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },


    });
};
