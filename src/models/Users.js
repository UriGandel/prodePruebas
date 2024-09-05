const sequelize = require('@/lib/sequelize');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('Users', {   
    username: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
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