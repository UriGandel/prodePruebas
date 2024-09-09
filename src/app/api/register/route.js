import Users from '@/models/Users';
import { NextResponse } from 'next/server';
var jwt = require('jsonwebtoken');
import syncDatabase from '@/lib/sync';
const dotenv = require('dotenv');
dotenv.config();

export async function POST(request) {
    try {
    syncDatabase();

        const { username, password } = await request.json();
        
        await Users.create({ username, password });

        const token = jwt.sign({ username }, "patata123", { expiresIn: '1h' });

        const response = NextResponse.json({ token, success: true });
        response.cookies.set('token', token, { httpOnly: true });
    
        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}