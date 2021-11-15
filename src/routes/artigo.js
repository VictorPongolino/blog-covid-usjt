const { checkSchema } = require("express-validator");

module.exports = function(application) {
    const controllerArtigo = application.src.controllers.artigo;
    const ArtigoValidator = application.src.controllers.validator.artigo;
    application.get('/artigo/criar', controllerArtigo.criar);
    application.post('/artigo/criar', checkSchema(ArtigoValidator), controllerArtigo.enviar);
    application.get('/artigo/:slug', controllerArtigo.getBySlug);
}