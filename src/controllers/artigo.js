exports.getFirst5 = async (req, res) => {
    console.log("Obtendo ...!")
    res.render('home/index', { 
        carrossel: [{ 
            titulo: "IMPORTANTE: Orientações de Vacinação!",
            descricao: "Descrevendo alguma coisa *teste",
            slug: "teste"
        }],
        noticias: [{
            titulo: "ABC",
            descricao: "DESC",
            slug: "teste"
        },
        {
            titulo: "COVID-19",
            descricao: "Um artigo falando sobre COVID",
            slug: "teste2"
        },
        {
            titulo: "OUTRO ARTIGO",
            descricao: "um artigo de teste",
            slug: "teste3"
        }]
    });
}