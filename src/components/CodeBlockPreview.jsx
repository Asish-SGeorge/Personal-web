import React, { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { CodeBlock } from "@/components/agents/code-block";

const LINES = [
  'import { generateText } from "ai";',
  "",
  "export async function summarize(input: string) {",
  "  const { text } = await generateText({",
  '    model: "openai/gpt-5",',
  `    prompt: \`Summarize this clearly: \${input}\`,`,
  "  });",
  "",
  "  return {",
  "    text,",
  "    generatedAt: new Date().toISOString(),",
  "  };",
  "}",
];

function StreamingCodeBlock() {
  const [visibleLines, setVisibleLines] = useState(1);
  const timer = useRef(undefined);
  const complete = visibleLines === LINES.length;

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    timer.current = window.setTimeout(
      () => setVisibleLines((value) => value + 1),
      260,
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [visibleLines]);

  return (
    <CodeBlock
      filename="summarize.ts"
      language="typescript"
      code={LINES.slice(0, visibleLines).join("\n")}
      status={complete ? "complete" : "streaming"}
      highlightLines={[4, 5, 6, 7]}
      maxHeight={224}
    />
  );
}

export default function CodeBlockPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[340px] w-full max-w-md mx-auto group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative h-full bg-[#050505] rounded-2xl">
        <StreamingCodeBlock key={run} />
        <button
          type="button"
          onClick={() => setRun((value) => value + 1)}
          className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-400 outline-none transition-colors hover:bg-slate-800 hover:text-white"
        >
          <RotateCcw className="w-3 h-3" />
          Replay
        </button>
      </div>
    </div>
  );
}
