import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
  activeTapID: string | null;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tapIDToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTapID: null,
    fileName: "",
    fileContent: "",
  },
  tapIDToRemove: null,
};
const fileTreeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTapIDToRemove: (state, action: PayloadAction<string>) => {
      state.tapIDToRemove = action.payload;
    },
  },
});

export const { setOpenedFilesAction, setClickedFileAction, setTapIDToRemove } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
