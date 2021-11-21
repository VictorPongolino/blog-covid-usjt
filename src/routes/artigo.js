const { checkSchema } = require("express-validator");

module.exports = function(application) {
    const controllerArtigo = application.src.controllers.artigo;
    const ArtigoValidator = application.src.controllers.validator.artigo;

    const loggingChecking = application.src.controllers.auth.login;

    application.get('/artigo/criar',  loggingChecking.userLoggedMiddleware, controllerArtigo.criar);
    application.post('/artigo/criar', loggingChecking.userLoggedMiddleware, checkSchema(ArtigoValidator), controllerArtigo.enviar);

    application.get('/artigo/:slug', controllerArtigo.getBySlug);
}