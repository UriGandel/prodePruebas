"use server";
import { DataTypes } from 'sequelize';
import sequelize from '@/lib/sequelize';

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precision: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

export default Users;