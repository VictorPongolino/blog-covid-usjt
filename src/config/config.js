const express = require('express'); 
// const expressValidator = require('express-validator')
const consign = require('consign');
const path = require('path');


var app = express();
app.set("view engine", "ejs"); // Engine que irá processar os htmls
app.set("views", "./src/views/"); // Local aonde as views estão.

// app.use(expressValidator());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const pathPublic = path.join(__dirname, "..", "public");
console.log(`Arquivos estáticos definido em "${pathPublic}"`);
app.use(express.static(pathPublic));

consign()
    .include("src/config/db.js")
    .then("src/config/sequelize.js")
    .then("src/models")
    .then("src/controllers")    
    .then("src/routes")
    .into(app);


console.log("Configurações carregadas!");

module.exports = app; 