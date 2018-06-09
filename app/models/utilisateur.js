import { sequelize, Sequelize } from '../lib/db';

const Utilisateur = sequelize.define('utilisateur', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pseudo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prenom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    freezeTableName: true,
    paranoid: true
});

export default Utilisateur;
export { Utilisateur };