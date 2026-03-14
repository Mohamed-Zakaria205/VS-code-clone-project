import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPositions, setMenuPositions] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  return (
    <div>
      <div
        className="flex items-center border-b border-zinc-700"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPositions({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFilesBarTap file={file} key={file.id} />
        ))}
      </div>
      {showMenu && <ContextMenu positions={menuPositions} />}
    </div>
  );
};

export default OpenedFilesBar;
