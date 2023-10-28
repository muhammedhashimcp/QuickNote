import Link from "next/link";
import UserInfo from "./userInfo";



export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-500 px-3 md:px-8 py-3">
      <Link className="text-white text-xl font-bold" href="/">
        QuickNote
      </Link>
      <div className="flex gap-5 items-center">
        <Link className="bg-white p-2 " href="/addNote">
          Add Note
        </Link>
        <UserInfo />
      </div>
    </nav>

  );
}
