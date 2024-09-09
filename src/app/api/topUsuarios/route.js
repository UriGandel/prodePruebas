import { NextResponse } from 'next/server';
import Users from '@/models/Users';

export async function GET() {
  try {
    const usuarios = await Users.findAll();
    return NextResponse.json({ usuarios });
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { usuarios } = await request.json();
    
    // Guardar cada usuario en la base de datos
    for (const usuario of usuarios) {
      await Users.create({
        username: usuario.nombre,
        precision: usuario.precision,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving usuarios:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}