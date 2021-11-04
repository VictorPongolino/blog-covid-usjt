module.exports = function(application) {
    const controllerArtigo = application.src.controllers.artigo;
    application.get('/artigo/:slug', controllerArtigo.getBySlug);
}