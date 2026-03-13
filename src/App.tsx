import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="border-r border-zinc-700 w-64 mt-3">
          <RecursiveComponent file={fileTree} />
        </div>

        <div className="flex-1">
          <OpenedFilesBar />
        </div>
      </div>
    </div>
  );
}

export default App;
