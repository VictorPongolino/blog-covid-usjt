module.exports = (application) => {
    const role = application.src.models.usuarioRestrincoes;

    this.getById = async (id) => {
        try {
            return role.findOne({
                where: {
                   id
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário ${error}`);
        }
    }

    this.getByUserId = async (usuarioId) => {
        try {
            return role.findOne({
                where: {
                    usuarioId
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário pelo userid ${error}`);
        }
    }

    this.criar = async (registros) => {
        try {
            return role.create(registros);
        } catch (error) {
            console.error(`Falha ao criar role para o usuário ${error}`);
        }
    }

    return this;
};