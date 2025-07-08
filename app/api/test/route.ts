import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch("http://localhost:3000/api/test")
    const test = await res.json()

    return NextResponse.json(test)
}