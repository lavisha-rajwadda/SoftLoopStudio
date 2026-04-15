/** Simple markdown-to-JSX renderer for blog posts */
const MarkdownRenderer = ({ content }: { content: string }) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  const parseInline = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    let inlineKey = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) parts.push(remaining.slice(0, boldMatch.index));
        parts.push(<strong key={`b${inlineKey++}`}>{boldMatch[1]}</strong>);
        remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
        continue;
      }
      // Italic
      const italicMatch = remaining.match(/\*(.+?)\*/);
      if (italicMatch && italicMatch.index !== undefined) {
        if (italicMatch.index > 0) parts.push(remaining.slice(0, italicMatch.index));
        parts.push(<em key={`i${inlineKey++}`}>{italicMatch[1]}</em>);
        remaining = remaining.slice(italicMatch.index + italicMatch[0].length);
        continue;
      }
      // Link
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch && linkMatch.index !== undefined) {
        if (linkMatch.index > 0) parts.push(remaining.slice(0, linkMatch.index));
        parts.push(<a key={`a${inlineKey++}`} href={linkMatch[2]}>{linkMatch[1]}</a>);
        remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
        continue;
      }
      parts.push(remaining);
      break;
    }
    return parts;
  };

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") { i++; continue; }

    // Headings
    if (line.startsWith("# ")) {
      elements.push(<h1 key={key++}>{parseInline(line.slice(2))}</h1>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{parseInline(line.slice(3))}</h2>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++}>{parseInline(line.slice(4))}</h3>);
      i++; continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(<blockquote key={key++}>{parseInline(quoteLines.join(" "))}</blockquote>);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: JSX.Element[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={items.length}>{parseInline(lines[i].replace(/^\d+\.\s/, ""))}</li>);
        i++;
      }
      elements.push(<ol key={key++}>{items}</ol>);
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: JSX.Element[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(<li key={items.length}>{parseInline(lines[i].slice(2))}</li>);
        i++;
      }
      elements.push(<ul key={key++}>{items}</ul>);
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith(">") && !lines[i].startsWith("- ") && !lines[i].startsWith("* ") && !/^\d+\.\s/.test(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(<p key={key++}>{parseInline(paraLines.join(" "))}</p>);
    }
  }

  return <div className="prose-blog">{elements}</div>;
};

export default MarkdownRenderer;
