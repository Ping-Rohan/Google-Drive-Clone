import React from "react";
import { FaFileVideo } from "react-icons/fa";

export default function FileComponent() {
  return (
    <div className="bg-slate-900 w-[200px] h-[150px] text-white px-3 py-2 flex flex-col items-center justify-center gap-2 font-josefin">
      <FaFileVideo size={90} />
      TestFile.mp4
    </div>
  );
}
