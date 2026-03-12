import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree,
  );

  return (
    <div>
      <div className="flex items-center text-white border-b border-zinc-700">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap file={file} key={file.id} />
        ))}
      </div>

      <div className="text-white">{clickedFile.fileContent}</div>
    </div>
  );
};

export default OpenedFilesBar;
