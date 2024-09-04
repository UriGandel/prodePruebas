"use server";
import Users from './Users';
import Guesses from './Guesses';
import Pruebas from './Pruebas';
import Notas from './Notas';

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

export { Users, Guesses, Pruebas, Notas };