const { Sequelize } = require('sequelize');

const Usuario = (application) => {
    const sequelize = application.src.config.sequelize;
    const artigo = application.src.models.artigo;
    console.log("Pegando de Usuário",application.src.models)

    this.usuario = sequelize.define("usuario", {

        id: { 
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true 
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },  

        senha: {
            type: Sequelize.STRING,
            allowNull: false,
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
    }, 
    {
        createdAt: false,
        updatedAt: false,
    });

    this.usuario.hasMany(artigo);
    artigo.belongsTo(this.usuario);

    return this.usuario;
};

module.exports = Usuario;