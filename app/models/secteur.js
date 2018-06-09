import { sequelize, Sequelize } from "../lib/db";

const Secteur = sequelize.define('secteur', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    paranoid: true
});

export default Secteur;
export { Secteur };