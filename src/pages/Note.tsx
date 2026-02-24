import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import postsData from '../lib/posts.json';
import { Post } from '../lib/types';
import { createHighlighter } from 'shiki';

const Note: React.FC = () => {
  const params = useParams();
  const slug = params['*'] || '';
  const [highlighter, setHighlighter] = useState<any>(null);

  useEffect(() => {
    createHighlighter({
      themes: ['vesper'],
      langs: ['javascript', 'typescript', 'python', 'bash', 'json', 'html', 'css', 'sql', 'yaml', 'markdown']
    }).then(setHighlighter);
  }, []);

  const post = useMemo(() => {
    return (postsData as Post[]).find(p => p.slug === slug);
  }, [slug]);

  if (!post) {
    return (
      <section>
        <h1>404</h1>
        <p>Note not found: {slug}</p>
      </section>
    );
  }

  return (
    <section className="tufte-note">
      <h1 className="title">{post.title}</h1>
      <p className="subtitle">{new Date(post.date).toLocaleDateString()}</p>

      <div className="markdown-body article">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            img: ({ node, ...props }) => {
              const src = props.src?.startsWith('/') 
                ? `${import.meta.env.BASE_URL}${props.src.slice(1)}` 
                : props.src;
              
              return (
                <figure className="fullwidth">
                  <a href={src} target="_blank" rel="noopener noreferrer">
                    <img {...props} src={src} loading="lazy" />
                  </a>
                  {props.alt && <figcaption>{props.alt}</figcaption>}
                </figure>
              );
            },
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              const value = String(children).replace(/\n$/, '');

              if (!inline && highlighter) {
                try {
                  const html = highlighter.codeToHtml(value, {
                    lang: language || 'text',
                    theme: 'vesper'
                  });
                  return <div className="shiki-container" dangerouslySetInnerHTML={{ __html: html }} />;
                } catch (e) {
                  console.error('Shiki highlighting failed:', e);
                }
              }

              return inline ? (
                <code className={className} {...props}>
                  {children}
                </code>
              ) : (
                <pre className={className}>
                  <code {...props}>{children}</code>
                </pre>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <style>{`
        .tufte-note {
          max-width: 100%;
        }
        .title {
          font-family: var(--font-serif);
          font-size: 3.2rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .subtitle {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.2rem;
          color: var(--base-70);
          margin-bottom: 3rem;
          display: block;
        }
        .markdown-body {
          font-family: var(--font-serif);
          color: var(--base-100);
          line-height: var(--line-height);
        }
        
        figure {
          margin: 3rem 0;
          padding: 0;
          max-width: 100%;
        }
        
        figure img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 2px;
        }
        
        figcaption {
          font-family: var(--font-serif);
          font-size: 1rem;
          line-height: 1.4;
          margin-top: 1rem;
          color: var(--base-70);
          font-style: italic;
          text-align: left;
        }

        .shiki-container {
          margin: 2rem 0;
        }

        .shiki {
          padding: 1.5rem !important;
          border-radius: 8px !important;
          overflow-x: auto;
          background-color: var(--base-10) !important;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.6;
          border: 1px solid var(--accent-muted);
        }
        
        /* Markdown overrides for Tufte compatibility */
        .markdown-body h2 { 
          font-style: italic;
          font-weight: 400;
          font-size: 2.1rem;
          margin-top: 2.5rem;
          border-bottom: none;
        }
        .markdown-body h3 {
          font-style: italic;
          font-weight: 400;
          font-size: 1.6rem;
          margin-top: 2rem;
        }
        .markdown-body p {
          margin-top: 1.4rem;
          margin-bottom: 1.4rem;
        }
        .markdown-body blockquote {
          margin: 2rem 0;
          padding-left: 1.5rem;
          border-left: 2px solid var(--accent);
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default Note;
