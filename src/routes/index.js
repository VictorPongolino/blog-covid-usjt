
const controller = require("../controllers/artigo");
module.exports = function(application) {
    application.get('/', controller.getFirst5);
}
