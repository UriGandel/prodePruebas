import Users from '@/models/Users';
import { NextRequest, NextResponse } from 'next/server';
var jwt = require('jsonwebtoken');

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        
        await Users.create({ username , password });

        const token = jwt.sign({ username }, "patata123", { expiresIn: '1h' });

        const response = NextResponse.json({ token, success: true }); // Add success property to the response
        response.cookies.set('token', token, { httpOnly: true });
    
        if (response.ok) {
            return response;
        } else {
            throw new Error('Response not OK');
        }
    } catch (error) {
        console.error(error);
        return NextResponse(500).json({ error: 'Internal server error' });
    }
}
