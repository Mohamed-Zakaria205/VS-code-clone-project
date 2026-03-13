import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import WelcomePage from "./components/WelcomePage";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <ResizablePanel
      leftPanel={
        <div className="h-full overflow-auto p-2">
          <RecursiveComponent file={fileTree} />
        </div>
      }
      rightPanel={
        <div className="h-full overflow-auto">
          {openedFiles.length ? <Preview /> : <WelcomePage />}
        </div>
      }
    />
  );
}

export default App;
