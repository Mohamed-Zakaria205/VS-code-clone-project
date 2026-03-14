interface IProps {
  positions: { x: number; y: number };
}

const ContextMenu = ({ positions }: IProps) => {
  return (
    <ul
      className="bg-white text-black w-fit px-7 py-2 rounded-md absolute"
      style={{ top: positions.y, left: positions.x }}
    >
      <li>Close tap</li>
      <li>Close all taps</li>
    </ul>
  );
};

export default ContextMenu;
