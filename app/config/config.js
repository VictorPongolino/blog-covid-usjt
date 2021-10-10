var express = require('express'); // Retorna uma função.


var app = express();
app.set("view engine", "ejs"); // Engine que irá processar os htmls
app.set("views", "../views"); // Local aonde as views estão.

module.exports = app;