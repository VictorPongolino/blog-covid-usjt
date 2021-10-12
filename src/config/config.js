const express = require('express'); // Retorna uma função.
const consign = require('consign');
const path = require('path');


var app = express();
app.set("view engine", "ejs"); // Engine que irá processar os htmls
app.set("views", "./src/views/"); // Local aonde as views estão.

const pathPublic = path.join(__dirname, "..", "public");
console.log(`Arquivos estáticos definido em "${pathPublic}"`);
app.use(express.static(pathPublic));

consign()
    .include("src/routes")
    .then("src/config/db.js")
    .then("src/models")
    .into(app);


console.log("Configurações carregadas!");

module.exports = app;