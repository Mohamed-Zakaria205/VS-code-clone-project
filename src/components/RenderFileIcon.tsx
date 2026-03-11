import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  const extension = fileName.split(".").pop();

  if (extension === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extension === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extension === "html") return <IconImg src="/icons/html.svg" />;
  if (extension === "css") return <IconImg src="/icons/css.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
