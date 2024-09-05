import { NextRequest, NextResponse } from 'next/server';
import Guesses from '@/models/Guesses';

export async function POST(request) {
    try {
        const { username, guesses } = await request.json();
        
        await Guesses.create({ username, guesses });

        const response = NextResponse.json({ success: true });

        return response;
    
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}