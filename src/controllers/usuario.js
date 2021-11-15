module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.get = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await usuario.findAll({
                limit: 1,
                where: {
                   id
                } 
            })
            .then(valor => {
                return valor;
            })
            .catch(error => {
                console.error(`Falha ao buscar usuário ${error}`);
            });

        } catch (error) {
            console.error(`Falha ao buscar usuário ${error}`);
        }
    }

    this.update = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await usuario.update(
            {
                // TODO: Setar atributos.
            },

            {
                limit: 1,
                where: {
                    id
                } 
            })
            .then(valor => {
                return valor;
            })
            .catch(error => {
                console.error(`Falha ao atualizar usuário ${error}`);
            });
        } catch (error) {
            console.error(`Falha ao atualizar usuário ${error}`);
        }
    }

    this.delete = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await usuario.delete({
                limit: 1,
                where: {
                   id
                } 
            })
            .then(valor => {
                return valor;
            })
            .catch(error => {
                console.error(`Falha ao deletar usuário ${error}`);
            });
        } catch (error) {
            console.error(`Falha ao deletar usuário ${error}`);
        }
    }

    return this;
};