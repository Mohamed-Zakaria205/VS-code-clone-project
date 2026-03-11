import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "Vs code clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.tsx",
              isFolder: false,
            },
            {
              name: "react.jsx",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
    {
      name: "index.css",
      isFolder: false,
    },
  ],
};
