import React from "react";
import { themes } from "mdx-deck";
import highlightStyle from "react-syntax-highlighter/styles/prism/ghcolors";
import { Prism } from "react-syntax-highlighter";
import { getLanguage } from "@mdx-deck/themes/syntax-highlighter";
import { Global, css } from "@emotion/react";

const pre = (props) => props.children;

const code = (props) => {
  const language = getLanguage(props.className);
  return <Prism language={language} styles={highlightStyle} {...props} />;
};

export const GlobalCSS = () => (
  <Global
    styles={css`
      code[color="code"] {
        color: ${highlightStyle["function"].color};
        background-color: ${highlightStyle[
          ':not(pre) > code[class*="language-"]'
        ].background};
        border-radius: 5px;
        font-size: 75%;
        margin: 0;
        padding: 0.2em 0.4em;
      }
      pre {
        padding: 0.5em;
      }
      // Ensure graph elements are correctly sized
      svg {
        font-size: 16px;
        text-align: left;
        display: block;
        margin-left: 65;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}
  />
);

export default {
  ...themes.notes,
  pre,
  code,
  styles: {
    // Code surfer highlighter
    CodeSurfer: codeSurferTheme(),
  },
};

function codeSurferTheme() {
  return {
    colors: {
      text: highlightStyle['pre[class*="language-"]'].color,
      background: highlightStyle['pre[class*="language-"]'].background,
      primary: highlightStyle["string"].color,
    },
    styles: {
      CodeSurfer: {
        tokens: {
          "prolog constant builtin": { color: highlightStyle["prolog"].color },
          "inserted function": { color: highlightStyle["function"].color },
          deleted: { color: highlightStyle["deleted"].color },
          changed: { color: highlightStyle["inserted"].color },
          "punctuation symbol": { color: highlightStyle["symbol"].color },
          "string char tag selector": { color: highlightStyle["string"].color },
          "keyword variable": {
            color: highlightStyle["keyword"].color,
            fontStyle: "italic",
          },
          comment: { color: highlightStyle["comment"].color },
          "attr-name": { color: highlightStyle["attr-name"].color },
        },
        title: {
          backgroundColor: highlightStyle['pre[class*="language-"]'].background,
          color: highlightStyle['pre[class*="language-"]'].color,
        },
        subtitle: { color: "#d6deeb", backgroundColor: "rgba(10,10,10,0.9)" },
        pre: {
          color: highlightStyle['pre[class*="language-"]'].color,
          backgroundColor: highlightStyle['pre[class*="language-"]'].background,
        },
        code: {
          color: highlightStyle['pre[class*="language-"]'].color,
          backgroundColor: highlightStyle['pre[class*="language-"]'].background,
        },
      },
    },
  };
}
