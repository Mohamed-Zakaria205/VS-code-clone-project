import { useSelector } from "react-redux";
import RecursiveComponent from "./components/RecursiveComponent";
import type { RootState } from "./app/store";
import { fileTree } from "./data/fileTree";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <>
      <ul className="text-white">
        {openedFiles.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
      <div className="m-2">
        <RecursiveComponent file={fileTree} />
      </div>
    </>
  );
}

export default App;
