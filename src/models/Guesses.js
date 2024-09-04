"use server";
import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

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