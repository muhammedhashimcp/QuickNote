"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ColorPicker from "@/components/ColorPicker";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteColor, setNoteColor] = useState("#ffffff");


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !noteColor) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, noteColor }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a note");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center" >
        <AiOutlineArrowLeft size={36} className="text-green-500" onClick={() => router.back()} />


        <h1 className="text-3xl font-bold">Add Note</h1>
        <p>Add a new note here</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Note Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id="title"
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Note Title"
            />
          </div>

          <div className="flex flex-col gap-2 " style={{ backgroundColor: noteColor }}>
            <label htmlFor="description">Note Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              rows="10"
              className="border border-slate-500 px-8 py-2"

              type="text"
              placeholder="Type your note here..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Select Note Color</label>
            <ColorPicker selectedColor={noteColor} setSelectedColor={setNoteColor} />
          </div>
          <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          >
            Add Note
          </button>
        </form>
      </div>
    </>

  );
}
