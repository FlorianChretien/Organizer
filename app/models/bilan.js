import { sequelize, Sequelize } from "../lib/db";
import Utilisateur from './utilisateur';

const Bilan = sequelize.define('bilan', {
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
    annee: {
        type : Sequelize.DATE,
        allowNull: false,
    },
    mois: {
        type : Sequelize.DATE,
        allowNull: false,
    },
    totalRevenus: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    totalDepenses: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    totalSecteur: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    totalRestant: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    paranoid: true
});

export default Bilan;
export { Bilan };