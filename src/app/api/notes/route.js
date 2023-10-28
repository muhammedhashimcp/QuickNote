import connectMongoDB from "@/lib/mongodb";
import Note from "@/models/note";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  const { title, description, noteColor } = await request.json();
  await connectMongoDB();
  await Note.create({ title, description, noteColor });
  return NextResponse.json({ message: "Note Created" }, { status: 201 });
}

export async function GET() {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  try {
    await connectMongoDB();
    const notes = await Note.find({ email: session.user.email });
    return NextResponse.json({ notes });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }

}

export async function DELETE(request) {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Note.findByIdAndDelete(id);
  return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}
