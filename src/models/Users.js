"use server";
import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

const Users = sequelize.define('Users', {   
    username: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id: {
        type: DataTypemmms.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }}, 
    {
        timestamps: false
    }
);

export default Users;