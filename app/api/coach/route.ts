// app/api/coach/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from LYRA API 👋' });
}
