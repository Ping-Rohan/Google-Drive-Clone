import { AiOutlineUpload } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { TbNote } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

let firstRender = true;

export default function ButtonRow() {
  const [files, setFiles] = useState("");

  const fileref = useRef();

  function handleUploadClick() {
    fileref.current.click();
  }

  useEffect(() => {
    if (!firstRender) {
      async function postData() {
        const formData = new FormData();

        console.log(files);

        formData.append("files", files[0]);

        return await fetch("http://localhost:4000", {
          method: "post",
          body: formData,
        });
      }
      postData().then((data) => console.log(data));
    }
    firstRender = false;
  }, [files]);

  return (
    <div className="flex py-4 gap-6 text-white">
      <button
        className="flex gap-2 items-center bg-blue-500 px-3 py-2 rounded-md"
        onClick={handleUploadClick}
      >
        {" "}
        <AiOutlineUpload size={24} /> Upload File
        <input
          type="file"
          className="hidden"
          ref={fileref}
          onChange={(e) => setFiles(e.target.files)}
        />
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
