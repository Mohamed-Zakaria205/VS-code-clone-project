import FileIcon from "./ui/fileIcon";
import RightArrowIcon from "./ui/RightArrowIcon";

interface IProps {
  fileName: string;
}
const FileComponent = ({ fileName }: IProps) => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <RightArrowIcon />
        <span className="mr-2">
          <FileIcon />
        </span>
        <span className="text-white">{fileName}</span>
      </div>
    </div>
  );
};

export default FileComponent;
