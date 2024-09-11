// src/models/Predicciones.js
import { DataTypes } from 'sequelize';
import sequelize from '@/lib/sequelize';
import Users from './Users';

const Predicciones = sequelize.define('Predicciones', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    },
  },
  prediccion: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// Definir la asociación

export default Predicciones;