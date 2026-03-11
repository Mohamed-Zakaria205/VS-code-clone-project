import { useState } from "react";
import type { IFile } from "../interfaces";
import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrow from "./SVG/BottomArrow";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  file: IFile;
}
const RecursiveComponent = ({ file: { name, isFolder, children } }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //** Handlers*//

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="ml-2 mb-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center ">
            {isOpen ? <BottomArrow /> : <RightArrowIcon />}
            <RenderFileIcon fileName={name} />
            <span className="text-white ml-1">{name}</span>
          </div>
        ) : (
          <div className=" flex items-center ml-2">
            <RenderFileIcon fileName={name} />
            <span className="text-white ml-1">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((child, idx) => {
          return <RecursiveComponent file={child} key={idx} />;
        })}
    </div>
  );
};

export default RecursiveComponent;
