const dbConfig = require("./db");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

sequelize.sync()
    .then(info => {
        console.log("Conectado com sucesso!");
    }).catch(error => {
        console.log("Falha ao estabelecer conexão " + error);
});

module.exports = function() {
    return sequelize;
};