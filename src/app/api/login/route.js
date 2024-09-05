"use server";
import { NextResponse } from 'next/server';
import Users from '@/models/Users';
import { Sequelize} from 'sequelize';
const dotenv = require('dotenv'); 

var jwt = require('jsonwebtoken');
dotenv.config();

export async function POST(request) {
  const { username, password } = await request.json();

  const user = await Users.findOne({ where: { username, password } });

  if (user) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const response = NextResponse.json({ token });
    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } 
  else {
    return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
  }
}

export async function GET(request) {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
}
