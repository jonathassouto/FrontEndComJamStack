import React from "react";
import { graphql } from "gatsby";

const NoticiaF1Template = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <header>
        <span>
          {frontmatter.category} • {frontmatter.date}
        </span>
        <h1>{frontmatter.title}</h1>
        <p>
          <em>Por {frontmatter.author}</em>
        </p>
      </header>
      <hr />
      <article>
        {/* O Gatsby v5 injeta o conteúdo renderizado do MDX via prop children */}
        {children}
      </article>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        category
        author
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.mdx.frontmatter.title} | Portal F1</title>
);

export default NoticiaF1Template;
