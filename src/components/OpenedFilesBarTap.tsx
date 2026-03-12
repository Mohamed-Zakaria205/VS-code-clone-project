import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      setClickedFileAction({ fileName: file.name, fileContent: file.content }),
    );
  };
  return (
    <div className="flex items-center p-2" onClick={onClick}>
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer mx-2 p-1"> {file.name}</span>
      <span className="cursor-pointer hover:bg-gray-600 duration-300 rounded-md w-fit mr-2 p-1">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTap;
