import RecursiveComponent from "./components/FileComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div className="m-2">
        <RecursiveComponent file={fileTree} />
      </div>
    </>
  );
}

export default App;
