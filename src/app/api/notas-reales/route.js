import { NextResponse } from 'next/server';
import Notas from '@/models/Notas'; // Asegúrate de tener un modelo Notas

export async function GET() {
  try {
    const notas = await Notas.findAll(); // Obtén las notas reales desde la base de datos
    return NextResponse.json({ notas });
  } catch (error) {
    console.error('Error fetching notas reales:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}