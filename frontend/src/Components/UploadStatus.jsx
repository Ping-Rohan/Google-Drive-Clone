import React from "react";

export default function UploadStatus({ msg }) {
  return (
    <div className="fixed right-0 bottom-0  w-[300px] px-3 py-1 text-white  bg-green-600 font-sans">
      {msg}
    </div>
  );
}
