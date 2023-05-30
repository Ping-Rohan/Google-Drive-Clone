import { AiOutlineUpload } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { TbNote } from "react-icons/tb";

export default function ButtonRow() {
  return (
    <div className="flex py-4 gap-6 text-white">
      <button className="flex gap-2 items-center bg-blue-500 px-3 py-2 rounded-md">
        {" "}
        <AiOutlineUpload size={24} /> Upload File
      </button>
      <button className="flex gap-2 items-center bg-orange-500 px-3 py-2 rounded-md">
        <IoMdCreate size={20} />
        Create Folder
      </button>
      <button className="flex items-center gap-2 bg-green-400 px-3 py-2 rounded-md">
        {" "}
        <TbNote color="white" size={24} /> Create Note
      </button>
    </div>
  );
}
