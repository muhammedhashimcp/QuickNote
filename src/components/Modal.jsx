"use client";

import { useEffect, useRef } from "react";


const Modal = ({ modalOpen, setModalOpen, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={modalRef} className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box relative">
                <label
                    onClick={() => setModalOpen(false)}
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                    ✕
                </label>
                {children}
            </div>
        </div>
    );
};

export default Modal;