module.exports = function(application) {
    const controllerRegistro = application.src.controllers.registro;
    const validatorRegistro = application.src.controllers.validator.registro;

    application.get('/registrar', controllerRegistro.registrar);
    application.post('/registrar', validatorRegistro.validadorSenha, controllerRegistro.registrar);

}