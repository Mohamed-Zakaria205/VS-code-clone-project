import type { IFile } from "../interfaces";
import FileIcon from "./ui/FileIcon";
import FolderIcon from "./ui/FolderIcon";
import RightArrowIcon from "./ui/RightArrowIcon";

interface IProps {
  file: IFile;
}
const RecursiveComponent = ({ file }: IProps) => {
  return (
    <div className="ml-2">
      <div className="flex items-center mb-2 ">
        <RightArrowIcon />
        <span className="mr-2">
          {file.isFolder ? <FolderIcon /> : <FileIcon />}
        </span>
        <span className="text-white">{file.name}</span>
      </div>
      {file.children &&
        file?.children.map((child) => {
          return <RecursiveComponent file={child} />;
        })}
    </div>
  );
};

export default RecursiveComponent;
