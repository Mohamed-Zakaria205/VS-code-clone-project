import { extensionFilePaths } from "../constants";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const RenderFileIcon = ({ fileName, isOpen, isFolder }: IProps) => {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionFilePaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionFilePaths[extension]}-open.svg`
        : `${extensionFilePaths[extension]}.svg`
      : `${extensionFilePaths[extension]}.svg`;

    return <IconImg src={iconPath} />;
  }

  if (isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-default-open.svg" />
    ) : (
      <IconImg src="/icons/folder-default.svg" />
    );
  return <FileIcon />;
};

export default RenderFileIcon;
