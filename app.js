const app = require("./src/config/config");

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`)
});

