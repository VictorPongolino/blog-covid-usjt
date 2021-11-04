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
        }


    });

    return this.artigo;
}

module.exports = Artigo;

/*
    - CAPA - [TODO]
    - TITULO
    - DESCRIÇÃO
    - DATA DE CRIAÇÃO [SEQUELIZE DEFAULT]
    - DATA DE ATUALIZAÇÃO [SEQUELIZE DEFAULT]
    - STATUS 
    - BODY
    - AUTOR
*/