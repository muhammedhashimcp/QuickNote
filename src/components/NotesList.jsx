import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import CopyComp from "./CopyComp";
import { formatDate } from "@/lib/formatDate";

export default async function NotesList({ notes }) {
  return (
    <>
  
      {notes.map((note) => (
        <div key={note._id} className="card w-full  shadow-lg my-4 border-t-4 border-green-400" >
          <div className="card-body">
            <div className="border border-slate-300">
              <div className="card-actions justify-between px-4 py-2">
                <h2 className="card-title" style={{ color: note.noteColor }} >{note.title}</h2 >
                <div className="flex gap-5">
                  <CopyComp text={note.description} />
                  <RemoveBtn id={note._id} />
                  <Link href={`/editNote/${note._id}`}>
                    <HiPencilAlt size={26} className="text-blue-400" />
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ background: note.noteColor }}>
              <textarea
                value={note.description}
                className="border border-slate-300 p-4 w-full"
                disabled
                type="text"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <p>Modified at:    {formatDate(note.updatedAt)} </p>
          </div>
        </div>

      ))}
    </>
  );
}
