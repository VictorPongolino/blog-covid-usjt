const { Op } = require("sequelize");

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
            return role.findAll({
                where: {
                    usuarioId
                } 
            })
        } catch (error) {
            console.error(`Falha ao buscar usuário pelo userid ${error}`);
        }
    }

    this.isUserRestrictedByRole = async (usuarioId, roleToCheck) => {
        try {
            return role.findOne({
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

    this.criar = async (registros) => {
        try {
            return role.create(registros);
        } catch (error) {
            console.error(`Falha ao criar role para o usuário ${error}`);
        }
    }
 
    this.deleteById = async (registros) => {
        try {
            return role.destroy({
                limit: 1,
                where: registros
            });
        } catch (error) {
            console.error(`Falha ao deletar role de usuário ${error}`);
        }
    }

    return this;
};