var express = require('express'); // Retorna uma função.
var consign = require('consign');


var app = express();
app.set("view engine", "ejs"); // Engine que irá processar os htmls
app.set("views", "./app/views/"); // Local aonde as views estão.

consign()
    .include("app/routes")
    .into(app);


console.log("Configurações carregadas!");

module.exports = app;