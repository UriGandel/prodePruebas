"use server";
const { DataTypes } = require('sequelize');
const Users = require('@/models/Users');
const sequelize = require('@/lib/sequelize');

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
    },
    Guess: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Guesses;