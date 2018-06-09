import { sequelize, Sequelize } from "../lib/db";
import Utilisateur from './utilisateur';

const Budget = sequelize.define('budget', {
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
    totalRevenus: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    totalDepenses: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    totalRestant: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    freezeTableName: true,
    paranoid: true
});

export default Budget;
export { Budget };