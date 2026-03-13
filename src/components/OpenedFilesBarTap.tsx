import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTapID },
    openedFiles,
  } = useSelector((state: RootState) => state.tree);
  const onClick = () => {
    dispatch(
      setClickedFileAction({
        fileName: file.name,
        fileContent: file.content,
        activeTapID: file.id,
      }),
    );
  };

  const onRemove = (e: React.MouseEvent<HTMLSpanElement>, id: string) => {
    e.stopPropagation();
    const filtered = openedFiles.filter((file) => file.id !== id);
    const lastTap = filtered[filtered.length - 1];

    if (!lastTap) {
      dispatch(
        setClickedFileAction({
          fileName: "",
          fileContent: "",
          activeTapID: null,
        }),
      );
      dispatch(setOpenedFilesAction([]));
      return;
    }
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        fileName: lastTap?.name,
        fileContent: lastTap?.content,
        activeTapID: lastTap.id,
      }),
    );
  };
  return (
    <div
      className={`flex items-center p-2 border-t-2 ${file.id === activeTapID ? " border-[#cf6ccf]" : "border-transparent"}  `}
      onClick={onClick}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer mx-1 p-1"> {file.name}</span>
      <span
        className="cursor-pointer hover:bg-gray-600 duration-300 rounded-md w-fit mr-2 p-1"
        onClick={(e) => onRemove(e, file.id)}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTap;
