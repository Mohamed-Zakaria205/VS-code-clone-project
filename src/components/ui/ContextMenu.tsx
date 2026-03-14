import { useEffect, useRef } from "react";

interface IProps {
  positions: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };
    window.document.addEventListener("click", handleClick);
    return () => {
      window.document.removeEventListener("click", handleClick);
    };
  }, [setShowMenu]);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md absolute"
        style={{ top: positions.y, left: positions.x }}
      >
        <li>Close tap</li>
        <li>Close all taps</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
