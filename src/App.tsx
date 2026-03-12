import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="border-r border-zinc-700 w-64">
          <RecursiveComponent file={fileTree} />
        </div>

        <OpenedFilesBar />
      </div>
    </div>
  );
}

export default App;
