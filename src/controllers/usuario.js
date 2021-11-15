module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.get = async (id) => {
        try {
            return usuario.findAll({
                limit: 1,
                where: {
                   id
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário ${error}`);
        }
    }

    this.findUserByEmail = async (email) => {
        try {
            return usuario.findOne({
                where: {
                   email
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário pelo email ${error}`);
        }
    }

    this.update = async (id) => {
        try {
            return usuario.update(
            {
                // TODO: Setar atributos.
            },

            {
                limit: 1,
                where: {
                    id
                } 
            })
        } catch (error) {
            console.error(`Falha ao atualizar usuário ${error}`);
        }
    }

    this.delete = async (id) => {
        try {
            return usuario.delete({
                limit: 1,
                where: {
                   id
                } 
            })
        } catch (error) {
            console.error(`Falha ao deletar usuário ${error}`);
        }
    }

    return this;
};