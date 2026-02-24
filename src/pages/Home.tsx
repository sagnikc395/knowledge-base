import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../lib/posts.json';
import { Post, TreeNode, FolderNode } from '../lib/types';

const Home: React.FC = () => {
  const posts = postsData as Post[];

  const tree = useMemo(() => {
    const root: TreeNode[] = [];
    posts.forEach(post => {
      const parts = post.slug.split('/');
      let currentLevel = root;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;

        if (isLast) {
          currentLevel.push({
            type: 'file',
            name: post.title,
            post
          });
        } else {
          let folder = currentLevel.find(
            (node): node is FolderNode => node.type === 'folder' && node.name === part
          );

          if (!folder) {
            folder = {
              type: 'folder',
              name: part,
              children: []
            };
            currentLevel.push(folder);
          }
          currentLevel = folder.children;
        }
      }
    });

    const sortTree = (nodes: TreeNode[]) => {
      nodes.sort((a, b) => {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        return a.type === 'folder' ? -1 : 1;
      });
      nodes.forEach(node => {
        if (node.type === 'folder') sortTree(node.children);
      });
    };
    sortTree(root);
    return root;
  }, [posts]);

  const RenderNode: React.FC<{ node: TreeNode }> = ({ node }) => {
    if (node.type === 'folder') {
      return (
        <li>
          <details open>
            <summary>{node.name}</summary>
            <ul>
              {node.children.map((child, i) => (
                <RenderNode key={i} node={child} />
              ))}
            </ul>
          </details>
        </li>
      );
    }
    return (
      <li>
        <Link to={`/notes/${node.post.slug}`}>{node.name}</Link>
        {node.post.date && (
          <span className="date"> — {new Date(node.post.date).toLocaleDateString()}</span>
        )}
      </li>
    );
  };

  return (
    <section>
      <h1 className="home-title">All Notes</h1>
      <div className="tree-container">
        <ul className="tree">
          {tree.map((node, i) => (
            <RenderNode key={i} node={node} />
          ))}
        </ul>
      </div>
      <style>{`
        .home-title {
          font-family: var(--font-serif);
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 400;
        }
        .tree-container {
          margin-top: 2rem;
        }
        ul.tree { 
          list-style: none; 
          padding-left: 0; 
        }
        ul.tree ul { 
          list-style: none; 
          padding-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          border-left: 1px solid var(--accent-muted);
        }
        summary { 
          cursor: pointer; 
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--base-100);
          display: block;
        }
        summary::-webkit-details-marker {
          display: none;
        }
        li { 
          margin-bottom: 0.5rem; 
        }
        li a {
          color: var(--accent);
          text-decoration: none;
          font-family: var(--font-serif);
          font-size: 1.1rem;
        }
        li a:hover {
          text-decoration: underline;
        }
        .date { 
          font-size: 0.9rem; 
          color: var(--base-70);
          font-family: var(--font-serif);
          font-style: italic;
          margin-left: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Home;
