import { NextResponse } from 'next/server';
import Guesses from '@/models/Guesses'; // Asegúrate de tener un modelo Predicciones
import sequelize from '@/lib/sequelize';


export async function GET() {
  try {
    await sequelize.sync();
    const predicciones = await Guesses.findAll(); // Obtén las predicciones desde la base de datos
    return NextResponse.json({ predicciones });
    
    
  } catch (error) {
    console.error('Error fetching predicciones:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}