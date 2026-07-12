import { Book } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "./RepoReadme.css";
import "github-markdown-css/github-markdown.css";

function RepoReadme({ readme }) {
  //Readme decoding logic
  let markdown = null;
  if (readme) {
    const binary = atob(readme?.content);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    markdown = new TextDecoder().decode(bytes);
  }

  return (
    <div className="readme-container">
      <div className="readme-header-container">
        <Book />
        <span>README.md</span>
      </div>
      <div className="repo-readme">
        {readme ? (
          <div className="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          "No readme available"
        )}
      </div>
    </div>
  );
}

export default RepoReadme;
