import { createSlice } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface ISelectedFile {
  fileName: string;
  fileContent: string;
}
interface IInitialState {
  openedFiles: IFile[];
  selectedFile: ISelectedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  selectedFile: {
    fileName: "",
    fileContent: "",
  },
};
const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export default fileTreeSlice.reducer;
