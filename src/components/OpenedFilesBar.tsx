import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree,
  );

  return (
    <div>
      <div className="flex items-center border-b border-zinc-700">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap file={file} key={file.id} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.fileContent || ""} />
    </div>
  );
};

export default OpenedFilesBar;
