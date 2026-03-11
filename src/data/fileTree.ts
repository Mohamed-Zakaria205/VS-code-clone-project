import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "Vs code clone",
  isFolder: true,
  children: [
    {
      name: "index.tsx",
      isFolder: false,
    },
    {
      name: "node_modules",
      isFolder: true,
    },
  ],
};
