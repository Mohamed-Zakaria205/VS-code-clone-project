import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <ResizablePanel
      leftPanel={
        <div className="h-full overflow-auto p-2">
          <RecursiveComponent file={fileTree} />
        </div>
      }
      rightPanel={<OpenedFilesBar />}
    />
  );
}

export default App;
