"use server";
import sequelize from '@/lib/sequelize';

import { Users, Guesses, Pruebas, Notas } from '../models/relations';

const syncDatabase = async () => {
  try {
    await sequelizeLib.sync({ force: true }); 
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

export default syncDatabase;