"use server";

import { DataTypes } from 'sequelize';
import sequelize from '@/lib/sequelize';

const Pruebas = sequelize.define('Pruebas', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    materia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tema: { 
        type: DataTypes.STRING,
        allowNull: false,
    }});

export default Pruebas;