import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useCleanUrl } from "../../Hooks/useCleanUrl";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const TotalContributions: FC = () => {
  const { markdown } = useCleanUrl(
    "https://raw.githubusercontent.com/tsirysndr/top-github-users/main/markdown/total_contributions/madagascar.md"
  );

  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
};

export default TotalContributions;
