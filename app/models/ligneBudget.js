import { sequelize, Sequelize } from "../lib/db";
import Budget from './budget'

const LigneBudget = sequelize.define('lignebudget', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    budget_id: {
        type: Sequelize.INTEGER,

        references: {
            model: Budget,
            key: 'id',
        },
    },
    revenusDepenses: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    montant: {
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
    date: {
        type : Sequelize.DATE,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    freezeTableName: true,
    paranoid: true
});

export default LigneBudget;
export { LigneBudget };