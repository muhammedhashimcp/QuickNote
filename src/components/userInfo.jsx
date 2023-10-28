"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { HiUserCircle } from "react-icons/hi";

export default function UserInfo() {
  const { data: session } = useSession();
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const profileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="">
      <HiUserCircle size={36} className="text-white" onClick={toggleProfileMenu} />

      {showProfileMenu &&
        <div
          ref={profileMenuRef}
          className="relative text-white">
          <div className="absolute z-10 -right-10 my-6">
            <div className="card w-80 bg-green-500 shadow-xl">
              <div className="card-body text-center ">

                <h2 className="text-xl font-bold ">{session?.user?.name}</h2>
                <p>Email: {session?.user?.email}</p>

                <div className="card-actions justify-center">
                  <button
                    onClick={() => signOut()}
                    className="bg-red-500 font-bold px-6 py-2 mt-3"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      }

    </div>
  );
}
