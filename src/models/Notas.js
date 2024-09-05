"use server";
import sequelize from '@/lib/sequelize';
import { DataTypes } from 'sequelize';

const Notas = sequelize.define("Notas", {
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    idPrueba: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Pruebas',
            key: 'id'
        }
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default Notas;