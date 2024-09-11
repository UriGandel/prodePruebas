import { NextResponse } from 'next/server';
import Predicciones from '@/models/Predicciones';

export async function POST(request) {
  try {
    const { datos, precision } = await request.json();
    for (const prediccion of datos) {
      await Predicciones.create({ ...prediccion, precision });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving predicciones:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}