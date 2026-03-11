import FolderIcon from "./ui/folderIcon";
import RightArrowIcon from "./ui/RightArrowIcon";

interface IProps {
  folderName: string;
}
const folderComponent = ({ folderName }: IProps) => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <RightArrowIcon />

        <span className="mr-2">
          <FolderIcon />
        </span>
        <span className="text-white">{folderName}</span>
      </div>
    </div>
  );
};

export default folderComponent;
