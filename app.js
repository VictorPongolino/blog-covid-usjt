const app = require("./config/config");

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`)
});