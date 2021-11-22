const dbConfig = require("./db");
const { Sequelize } = require('sequelize');


console.log(`[CONNECTION-INFO]: Tentando estabelecer conexão no Host '${dbConfig.HOST}:${dbConfig.PORT}' na database '${dbConfig.DB}' !`)

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorsAliases: false
});

sequelize.sync()
    .then(info => {
        console.log("[CONNECTION]: Conectado com sucesso!");
    }).catch(error => {
        console.error("[CONNECTION]: Falha ao estabelecer conexão " + error);
});

module.exports = function() {
    return sequelize;
};