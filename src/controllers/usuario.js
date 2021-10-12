module.exports = (application) => {
    const sequelize = application.src.models.sequelize;

    this.get = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await sequelize.findAll({
                limit: 1,
                where: {
                   id: id 
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

    this.create = async (req, res) => {
        try {
            const resultado = await sequelize.create({
                // TODO: Setar atributos.
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

    this.update = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await sequelize.update(
            {
                // TODO: Setar atributos.
            },

            {
                limit: 1,
                where: {
                    id: id 
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
            const resultado = await sequelize.delete({
                limit: 1,
                where: {
                   id: id 
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
};