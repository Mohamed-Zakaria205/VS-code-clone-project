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
              name: "react.js",
              isFolder: false,
            },
            {
              name: "react.jsss",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
