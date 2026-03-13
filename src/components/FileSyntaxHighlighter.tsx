import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface IProps {
  content: string;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDarkReasonable}
      customStyle={{
        background: "transparent",
        padding: "1rem",
        margin: "0",
        height: "100%",
        overflow: "auto",
      }}
      showLineNumbers
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
