import { NextResponse } from 'next/server';
import Notas from '@/models/Notas';

export async function GET() {
  try {
    const notas = await Notas.findAll();
    return NextResponse.json({ notas });
  } catch (error) {
    console.error('Error fetching notas reales:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}