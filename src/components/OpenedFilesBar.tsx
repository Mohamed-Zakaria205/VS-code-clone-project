import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      {openedFiles.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No files opened</p>
        </div>
      )}
      <div className="flex items-center border-b border-zinc-700">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap file={file} key={file.id} />
        ))}
      </div>
    </div>
  );
};

export default OpenedFilesBar;
