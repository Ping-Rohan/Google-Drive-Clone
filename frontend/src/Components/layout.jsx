import Search from "./search";
import ButtonRow from "./ButtonRow";
import FoldersRow from "./FoldersRow";
import FilesArea from "./FilesArea";
import UploadStatus from "./UploadStatus";

import { io } from "socket.io-client";
import { useState } from "react";

const client = io.connect("http://localhost:4000");

client.on("connect", () => console.log("connected"));

export default function Layout() {
  const [socketMsg, setSocketMsg] = useState("");
  client.once("ack", (msg) => setSocketMsg(msg));
  return (
    <div className="bg-slate-100 min-h-screen pt-7 relative">
      <div className="flex items-center row flex-col">
        <Search />
        <ButtonRow />
        <FoldersRow />
      </div>
      <FilesArea />
      <UploadStatus msg={socketMsg} />
    </div>
  );
}
