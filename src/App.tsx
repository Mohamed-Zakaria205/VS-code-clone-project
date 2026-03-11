import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <>
      <div className="m-2">
        <FileComponent fileName="Index.ts" />
        <FolderComponent folderName="node-modules" />
      </div>
    </>
  );
}

export default App;
