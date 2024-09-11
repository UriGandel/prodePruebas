"use server";
import Users from './Users';
import Guesses from './Guesses';
import Pruebas from './Pruebas';
import Notas from './Notas';
import Predicciones from './Predicciones';

// Relación entre Users y Guesses
Users.hasMany(Guesses, { foreignKey: 'idGuesser' });
Users.hasMany(Guesses, { foreignKey: 'idStudent' });
Guesses.belongsTo(Users, { as: 'Guesser', foreignKey: 'idGuesser' });
Guesses.belongsTo(Users, { as: 'Student', foreignKey: 'idStudent' });

// Relación entre Users y Notas
Users.hasMany(Notas, { foreignKey: 'idStudent' });
Notas.belongsTo(Users, { foreignKey: 'idStudent' });

// Relación entre Pruebas y Notas
Pruebas.hasMany(Notas, { foreignKey: 'idPrueba' });
Notas.belongsTo(Pruebas, { foreignKey: 'idPrueba' });

Users.hasMany(Predicciones, { foreignKey: 'idUser' });
Predicciones.belongsTo(Users, { foreignKey: 'idUser' });

export { Users, Guesses, Pruebas, Notas, Predicciones };