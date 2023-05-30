import Search from "./search";
import ButtonRow from "./ButtonRow";
import FoldersRow from "./FoldersRow";
import DragArea from "./DragArea";

export default function layout() {
  return (
    <div className="bg-slate-100 min-h-screen pt-7">
      <div className="flex items-center row flex-col">
        <Search />
        <ButtonRow />
        <FoldersRow />
      </div>
      <DragArea />
    </div>
  );
}
