import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

interface IProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

const ResizablePanel = ({ leftPanel, rightPanel }: IProps) => {
  return (
    <div style={{ height: "100vh" }}>
      <Group orientation="horizontal">
        <Panel
          id="sidebar"
          defaultSize="13%"
          minSize="15%"
          collapsible={true}
          collapsedSize="0%"
        >
          {leftPanel}
        </Panel>

        <Separator
          style={{
            width: "2px",
            backgroundColor: "#2d2d2d",
            cursor: "col-resize",
            transition: "background-color 0.15s ease",
          }}
          onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.backgroundColor = "#007acc";
          }}
          onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.backgroundColor = "#2d2d2d";
          }}
        />

        <Panel id="editor" defaultSize="87%">
          {rightPanel}
        </Panel>
      </Group>
    </div>
  );
};

export default ResizablePanel;
