interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  const extension = fileName.split(".").pop();
  return <div className="text-white ">{extension}</div>;
};

export default RenderFileIcon;
