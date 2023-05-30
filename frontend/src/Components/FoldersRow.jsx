import { AiFillLock } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { RiFolderSharedFill } from "react-icons/ri";

export default function FoldersRow() {
  return (
    <div className="flex gap-5 font-bold font-josefin pt-10">
      <div className="flex items-center gap-6 text-gray-700 bg-white px-4 py-2 text-xl shadow-md cursor-pointer">
        <AiFillLock />
        <span>Documents</span>
      </div>
      <div className="flex items-center gap-6 text-gray-700 bg-white px-4 py-2 text-xl shadow-md cursor-pointer">
        <ImBooks />
        <span>Books</span>
      </div>
      <div className="flex items-center gap-6 text-gray-700 bg-white px-4 py-2 text-xl shadow-md cursor-pointer">
        <RiFolderSharedFill />
        <span>Shared Folders</span>
      </div>
    </div>
  );
}
