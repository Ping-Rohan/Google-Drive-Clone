import { AiOutlineSearch } from "react-icons/ai";
export default function search() {
  return (
    <div className="flex items-center bg-white border px-3 py-1 border-gray-500">
      <input
        type="text"
        placeholder="Search"
        className="font-sansPro h-full outline-none min-w-[480px] w-full"
      />
      <AiOutlineSearch size={24} />
    </div>
  );
}
