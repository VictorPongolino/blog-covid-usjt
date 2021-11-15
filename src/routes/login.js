module.exports = function(application) {
    const controllerLogin = application.src.controllers.login;
    application.get('/login', controllerLogin.login);
    application.post('/login', controllerLogin.login);
}
