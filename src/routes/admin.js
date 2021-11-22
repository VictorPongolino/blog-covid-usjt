module.exports = function(application) {
    const prefixPath = application.src.controllers.admin.usuario;

    const viewPath = prefixPath.view;
    console.log(prefixPath)

    application.get('/admin/usuario', viewPath.get);
    application.get('/admin/usuario/editar/:email', prefixPath.editar.get);
    application.post('/admin/usuario/editar/:email', prefixPath.editar.post);
    application.get('/admin/usuario/:email', viewPath.viewGET);
} 