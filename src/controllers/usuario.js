module.exports = (application) => {
    const usuario = application.src.models.usuario;

    this.get = async (id) => {
        try {
            return usuario.findOne({
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

    this.criar = async (registros) => {
        try {
            return usuario.create(registros);
        } catch (error) {
            console.error(`Falha ao criar usuário ${error}`);
        }
    }

    return this;
};