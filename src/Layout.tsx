import React, { useState, useMemo } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Fuse from 'fuse.js';
import postsData from './lib/posts.json';
import { Post } from './lib/types';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const posts = postsData as Post[];

  const fuse = useMemo(() => new Fuse(posts, {
    keys: ['title', 'content', 'category'],
    threshold: 0.3,
    includeMatches: true
  }), [posts]);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    return fuse.search(searchQuery).slice(0, 10);
  }, [fuse, searchQuery]);

  const categories = useMemo(() => {
    const cats: Record<string, Post[]> = {};
    posts.forEach(post => {
      if (!cats[post.category]) cats[post.category] = [];
      cats[post.category].push(post);
    });
    return cats;
  }, [posts]);

  const handleSearchSelect = (slug: string) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    navigate(`/notes/${slug}`);
  };

  return (
    <div className="app-shell">
      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={isMenuOpen ? 'open' : ''}>
        <h3><Link to="/" onClick={() => setIsMenuOpen(false)}>Knowledge Base</Link></h3>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
            />
          </div>
          
          {isSearchOpen && searchQuery && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map(({ item }) => (
                  <div 
                    key={item.slug} 
                    className="search-result-item"
                    onClick={() => handleSearchSelect(item.slug)}
                  >
                    <div className="result-title">{item.title}</div>
                    <div className="result-category">{item.category}</div>
                  </div>
                ))
              ) : (
                <div className="no-results">No results found</div>
              )}
            </div>
          )}
        </div>

        <div className="category">
          <ul>
            <li>
              <Link to="/graph" onClick={() => setIsMenuOpen(false)}>Graph View</Link>
            </li>
          </ul>
        </div>

        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="category">
            <p className="category-title"><strong>{category.toUpperCase()}</strong></p>
            <ul>
              {items.map(item => (
                <li key={item.slug}>
                  <Link to={`/notes/${item.slug}`} onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <main>
        <Outlet />
      </main>

      {isMenuOpen && (
        <div className="scrim" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {isSearchOpen && searchQuery && (
        <div className="search-scrim" onClick={() => setIsSearchOpen(false)}></div>
      )}

      <style>{`
        .search-container {
          margin: 1rem 0;
          position: relative;
        }
        .search-input-wrapper {
          display: flex;
          align-items: center;
          background: #eee;
          padding: 0.5rem;
          border-radius: 4px;
        }
        .search-icon {
          margin-right: 0.5rem;
          color: #666;
        }
        .search-input-wrapper input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }
        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
          max-height: 300px;
          overflow-y: auto;
        }
        @media (prefers-color-scheme: dark) {
          .search-results {
            background: #222;
            border-color: #444;
          }
          .search-input-wrapper {
            background: #333;
          }
        }
        .search-result-item {
          padding: 0.75rem;
          cursor: pointer;
          border-bottom: 1px solid #eee;
        }
        .search-result-item:hover {
          background: #f5f5f5;
        }
        @media (prefers-color-scheme: dark) {
          .search-result-item { border-bottom-color: #333; }
          .search-result-item:hover { background: #333; }
        }
        .result-title { font-weight: bold; font-size: 0.9rem; }
        .result-category { font-size: 0.75rem; color: #666; }
        .no-results { padding: 1rem; text-align: center; color: #666; }
        .search-scrim {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999;
        }
        
        /* Layout styles from +layout.svelte */
        :global(body) {
          padding-left: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
        .app-shell { display: flex; min-height: 100vh; position: relative; }
        .scrim {
          display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.1); z-index: 99;
        }
        nav {
          width: 250px; background: #fffff8; border-right: 1px solid #eee;
          padding: 2rem 1.5rem; height: 100vh; overflow-y: auto;
          position: fixed; left: 0; top: 0; z-index: 1000;
          transition: transform 0.3s ease; font-size: 0.9rem;
        }
        nav h3 { margin-top: 0; font-size: 1.4rem; }
        nav ul { list-style: none; padding-left: 0; margin-top: 0.5rem; }
        nav li { margin-bottom: 0.5rem; }
        nav a { text-decoration: none; color: #111; }
        nav a:hover { text-decoration: underline; }
        .category-title { margin-bottom: 0.5rem; margin-top: 1.5rem; display: block; font-size: 0.8rem; letter-spacing: 0.1em; }
        main { flex: 1; margin-left: 250px; padding: 2rem 4rem; max-width: 1000px; width: 100%; box-sizing: border-box; }
        .menu-toggle {
          display: none; position: fixed; top: 1rem; left: 1rem; z-index: 200;
          background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.5rem;
          background-color: rgba(255, 255, 255, 0.8); border-radius: 4px;
        }
        @media (prefers-color-scheme: dark) {
          nav { background-color: #151515; border-right-color: #333; }
          nav a { color: #ddd; }
          .menu-toggle { color: #ddd; background-color: rgba(0,0,0,0.5); }
        }
        @media (max-width: 900px) {
          nav { transform: translateX(-100%); box-shadow: 2px 0 5px rgba(0,0,0,0.1); }
          nav.open { transform: translateX(0); }
          .scrim { display: block; }
          main { margin-left: 0; padding: 4rem 1.5rem; }
          .menu-toggle { display: block; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
