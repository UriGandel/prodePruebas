"use server";
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Guesses = sequelize.define('Guesses', {   
    idGuesser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id"
        }
    },
    idStudent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id"
        }
    }
});

export default Guesses;