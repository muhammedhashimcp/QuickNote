"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "./Modal";

export default function RemoveBtn({ id }) {
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const router = useRouter();
  const removeNote = async () => {
    const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setOpenModalDeleted(false);
      router.refresh();
    }
  };

  return (
    <>

      <button onClick={() => setOpenModalDeleted(true)} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
      <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
        <h3 className='text-lg'>
          Are you sure, you want to delete this note?
        </h3>
        <div className='modal-action'>
          <button onClick={() => removeNote(id)} className='btn hover:bg-red-500 hover:text-white'>
            Yes
          </button>
        </div>
      </Modal>
    </>

  );
}
