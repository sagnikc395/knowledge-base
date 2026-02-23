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
      <h1>All Notes</h1>
      <ul className="tree">
        {tree.map((node, i) => (
          <RenderNode key={i} node={node} />
        ))}
      </ul>
      <style>{`
        .date { font-size: 0.8rem; color: #666; }
        @media (prefers-color-scheme: dark) { .date { color: #aaa; } }
        ul.tree { list-style: none; padding-left: 1rem; }
        ul.tree ul { width: auto; padding-left: 1.5rem; list-style: none; }
        summary { cursor: pointer; font-weight: bold; margin-bottom: 0.5rem; }
        li { margin-bottom: 0.5rem; }
      `}</style>
    </section>
  );
};

export default Home;
