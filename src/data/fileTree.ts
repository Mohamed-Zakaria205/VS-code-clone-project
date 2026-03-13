import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "Vs code clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
              content:
                "import React from 'react';\nconsole.log('react.js file');",
            },
            {
              id: uuid(),
              name: "react.jsss",
              isFolder: false,
              content: "fdsf fds fdsf dsfd sfds f",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content:
            '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Vs code clone</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>',
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content:
                "import React from 'react';\n\ninterface IProps {\n  children: React.ReactNode;\n}\n\nconst Button = ({ children }: IProps) => {\n  return <button>{children}</button>;\n};\n\nexport default Button;",
            },
            {
              id: uuid(),
              name: "Modal.tsx",
              isFolder: false,
              content:
                "import React from 'react';\n\ninterface IProps {\n  isOpen: boolean;\n  close: () => void;\n}\n\nconst Modal = ({ isOpen, close }: IProps) => {\n  if (!isOpen) return null;\n  return (\n    <div>\n      <div>Modal Content</div>\n      <button onClick={close}>Close</button>\n    </div>\n  );\n};\n\nexport default Modal;",
            },
          ],
        },
      ],
    },
  ],
};
