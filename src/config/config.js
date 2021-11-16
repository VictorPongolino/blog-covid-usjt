const express = require('express'); 
// const expressValidator = require('express-validator')
const consign = require('consign');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

require('dotenv').config({
  encoding: 'latin1'
})
 
var app = express();
app.set("view engine", "ejs"); // Engine que irá processar os htmls
app.set("views", "./src/views/"); // Local aonde as views estão.

app.use(flash());

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: { maxAge: 900000 } 
}))

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