import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ContentfulRichTextContent({ content }: { content: any }) {
  if (!content) return null;
  return documentToReactComponents(content, {
    renderNode: {
      paragraph: (_node, children) => (
        <p className="inline-block">{children}</p>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="text-base md:text-xl">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-inside list-disc">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
    },
  });
}
