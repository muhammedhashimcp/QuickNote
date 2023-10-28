"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ColorPicker from "@/components/ColorPicker";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function EditNoteForm({ id, title, description, noteColor }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newNoteColor, setNewNoteColor] = useState(noteColor);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle || !newDescription || !newNoteColor) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newNoteColor }),
      });

      if (!res.ok) {
        throw new Error("Failed to update notes");
      }

      router.refresh();
      router.push("/");
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
            <label htmlFor="newTitle"> Note Title</label>
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              id="newTitle"
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Note New Title"
            />
          </div>

          <div className="flex flex-col gap-2 " style={{ backgroundColor: newNoteColor }}>
            <label htmlFor="newDescription">Note Description</label>
            <textarea
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              id="newDescription"
              rows="10"
              className="border border-slate-500 px-8 py-2"

              type="text"
              placeholder="Update your note here..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Select Note Color</label>
            <ColorPicker selectedColor={newNoteColor} setSelectedColor={setNewNoteColor} />
          </div>
          <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Note
          </button>
        </form>
      </div>
    </>
  );
}
