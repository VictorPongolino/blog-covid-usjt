const { Sequelize } = require('sequelize');

const Artigo = (application) => {
    const sequelize = application.src.config.sequelize;

    this.artigo = sequelize.define("artigo", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        slug: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },

        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        body: {
            type: Sequelize.TEXT,
            allowNull: false,
        },

        status: {
            type: Sequelize.ENUM,
            values: ['APROVADO', 'EM_ANALISE', 'REPROVADO', 'OCULTADO', 'DELETADO'],
            defaultValue: 'EM_ANALISE',
            allowNull: false,
        },

        criado_em: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },

        editado_em: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
    },
    {
        createdAt: false,
        updatedAt: false,
    });

    return this.artigo;
}

module.exports = Artigo;