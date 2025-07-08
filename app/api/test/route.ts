import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        message: "hello there",
        description: "this is a test api",
        author: "made by SAN DESH ",
        info: "this should work though",
    })
}