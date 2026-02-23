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
    <section>
      <h1 className="title">{post.title}</h1>
      <p className="subtitle">{new Date(post.date).toLocaleDateString()}</p>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            img: ({ node, ...props }) => {
              return (
                <span className="image-container">
                  <img {...props} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1.5rem 0' }} />
                  {props.alt && <span className="image-caption">{props.alt}</span>}
                </span>
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
                  return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
        .image-container { display: block; margin: 2rem 0; }
        .image-caption { 
          display: block; 
          text-align: center; 
          font-size: 0.8rem; 
          color: #666; 
          margin-top: 0.5rem;
          font-style: italic;
        }
        .markdown-body pre {
          padding: 0 !important;
          background: transparent !important;
        }
        .markdown-body pre shiki {
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }
        /* Custom styles for shiki output if needed */
        .shiki {
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          background-color: #101010 !important;
        }
      `}</style>
    </section>
  );
};

export default Note;
