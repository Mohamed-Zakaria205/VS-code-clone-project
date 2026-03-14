import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";

interface IProps {
  positions: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
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
        className="bg-black border border-gray-500 text-gray-400 w-fit px-7 py-2 rounded-md absolute"
        style={{ top: positions.y, left: positions.x }}
      >
        <li className="hover:text-white cursor-pointer">Close tap</li>
        <li
          onClick={() => {
            dispatch(setOpenedFilesAction([]));
          }}
          className="mt-3 hover:text-white cursor-pointer"
        >
          Close all taps
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
