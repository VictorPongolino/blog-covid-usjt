module.exports = function(application) {
    console.log(application.src.controllers)
    console.log("DEPOIS\n\n",application.src.controllers.artigo)
    const controllerArtigo = application.src.controllers.artigo;
    application.get('/', controllerArtigo.getFirst5);
}
