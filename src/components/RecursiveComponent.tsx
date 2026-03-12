import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrow from "./SVG/BottomArrow";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}
const RecursiveComponent = ({ file }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { name, isFolder, children } = file;
  //** Handlers*//

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="ml-2 mb-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center ">
            {isOpen ? <BottomArrow /> : <RightArrowIcon />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="text-white ml-1">{name}</span>
          </div>
        ) : (
          <div
            className=" flex items-center ml-3"
            onClick={() => dispatch(setOpenedFiles([...openedFiles, file]))}
          >
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
