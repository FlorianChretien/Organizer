import { sequelize, Sequelize } from "../lib/db";
import Utilisateur from './utilisateur';

const Fichier = sequelize.define('fichier', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    utilisateur_id: {
        type: Sequelize.INTEGER,

        references: {
            model: Utilisateur,
            key: 'id',
        },
    },
    date: {
        type : Sequelize.DATE,
        allowNull: false,
    },
    url : {
        type : Sequelize.STRING,
        allowNull: false,
    },
    libelle: {
        type : Sequelize.STRING,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    freezeTableName: true,
    paranoid: true
});

export default Fichier;
export { Fichier };