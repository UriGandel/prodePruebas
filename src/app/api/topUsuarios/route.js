import { NextResponse } from 'next/server';
import Users from '@/models/Users';
import Predicciones from '@/models/Predicciones';
import syncDatabase from '@/lib/sync';


export async function GET() {
  try {
    await syncDatabase();
    const usuarios = await Users.findAll({
      include: [{ model: Predicciones }]
    });
    return NextResponse.json({ usuarios });
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}