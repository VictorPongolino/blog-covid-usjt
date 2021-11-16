module.exports = function(application) {
    const controllerLogin = application.src.controllers.login;
    const validador = application.src.controllers.validator.login;

    application.get('/login', controllerLogin.login);
    application.post('/login', validador.validadorLogin, controllerLogin.login);
}
