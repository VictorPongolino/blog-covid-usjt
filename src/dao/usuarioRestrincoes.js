const { Op } = require("sequelize");

const UsuarioRestrincoes = (application) => {
    const usuarioRestrincoes = application.src.models.usuarioRestrincoes;

    this.criar = async (registros) => {
        try {
            return usuarioRestrincoes.create(registros);
        } catch (error) {
            console.error(`Falha ao criar role para o usuário ${error}`);
        }
    }

    this.isUserRestrictedByRole = async (usuarioId, roleToCheck) => {
        try {
            return usuarioRestrincoes.findOne({
                where: {
                    [Op.and]: [
                        {usuarioId},
                        {restrito_em: roleToCheck},
                    ]
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário pelo userid ${error}`);
        }
    }


    this.deleteByUserAndRole = async (usuarioId, roleToCheck) => {
        try {
            return role.destroy({
                where: {
                    [Op.and]: [
                        {usuarioId},
                        {restrito_em: roleToCheck},
                    ]
                } 
            });
        } catch (error) {
            console.error(`Falha ao deletar role de usuário ${error}`);
        }
    }

    return this;
}

module.exports = UsuarioRestrincoes;