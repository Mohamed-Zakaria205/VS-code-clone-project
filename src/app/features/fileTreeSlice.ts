import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};
const fileTreeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
    },
  },
});

export const { setOpenedFilesAction, setClickedFileAction } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
