import Users from '@/models/Users';
import { NextResponse } from 'next/server';
const dotenv = require('dotenv');
import  syncDatabase  from '@/lib/sync';
dotenv.config();
var jwt = require('jsonwebtoken');

export async function POST(request) {
  await syncDatabase();

  const { username, password } = await request.json();

  const user = await Users.findOne({ where: { username, password } });

  if (user) {
    const token = jwt.sign({ username }, "patata123", { expiresIn: '1h' });

    const response = NextResponse.json({ token });
    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } else {
    return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
  }

}