import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent || ""} />
    </>
  );
};

export default Preview;
