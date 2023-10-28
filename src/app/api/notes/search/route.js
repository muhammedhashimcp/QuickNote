import { NextResponse } from "next/server";



export async function GET(request) {
  
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get('query'))
    const query = searchParams.get('query');

    const filteredNotes = notes.data.notes.filter((note) => {
        return note.name.toLowerCase().includes(query.toLowerCase()) || note.symbol.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredNotes);
}