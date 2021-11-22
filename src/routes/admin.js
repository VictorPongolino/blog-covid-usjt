module.exports = function(application) {
    const prefixPath = application.src.controllers.admin.usuario;

    const viewPath = prefixPath.view;
    const editarPath = prefixPath.editar;
    const banirPath = prefixPath.banir;
    const desbanirPath = prefixPath.desbanir;

    application.get('/admin/usuario', viewPath.get);
    application.get('/admin/usuario/editar/:email', editarPath.get);
    application.post('/admin/usuario/editar/:email', editarPath.post);
    application.get('/admin/usuario/banir/:email', banirPath.get);
    application.get('/admin/usuario/desbanir/:email', desbanirPath.get);
    application.post('/admin/usuario/banir/:email', banirPath.post);
    application.get('/admin/usuario/:email', viewPath.viewGET);
} 