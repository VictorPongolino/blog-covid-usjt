


const { Sequelize } = require('sequelize');

const UsuarioRestrincoes = (application) => {
    const sequelize = application.src.config.sequelize;
    const usuario = application.src.models.usuario;

    this.usuarioRestrincoes = sequelize.define("usuarioRestrincoes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        restrito_em: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        staff: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        motivo: {
            type: Sequelize.STRING,
            allowNull: false
        },

        criado_em: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },

        tickdesban: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    },
    {
        createdAt: false,
        updatedAt: false,
    }
    );

    usuario.hasMany(this.usuarioRestrincoes);
    this.usuarioRestrincoes.belongsTo(usuario);

    return this.usuarioRestrincoes;
}

module.exports = UsuarioRestrincoes; 