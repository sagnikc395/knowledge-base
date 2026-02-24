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
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
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
                  </div>
                ))
              ) : (
                <div className="no-results">No results found</div>
              )}
            </div>
          )}
        </div>

        <div className="nav-links">
          <Link to="/graph" onClick={() => setIsMenuOpen(false)}>Graph View</Link>
          
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="nav-category">
              <span className="category-label">{category}</span>
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
        </div>
      </nav>

      <main>
        <article>
          <Outlet />
        </article>
      </main>

      {isMenuOpen && (
        <div className="scrim" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {isSearchOpen && searchQuery && (
        <div className="search-scrim" onClick={() => setIsSearchOpen(false)}></div>
      )}

      <style>{`
        .app-shell { 
          display: flex; 
          min-height: 100vh; 
          background: var(--base-00);
          color: var(--base-100);
          font-family: var(--font-serif);
        }
        
        nav {
          width: 260px; 
          background: var(--base-00); 
          padding: 3rem 1.5rem; 
          height: 100vh; 
          overflow-y: auto;
          position: fixed; 
          left: 0; 
          top: 0; 
          z-index: 1000;
          transition: transform 0.3s ease;
          border-right: 1px solid var(--accent-muted);
        }

        nav h3 { 
          margin-bottom: 2rem;
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 1.4rem;
        }
        
        nav h3 a {
          color: var(--base-100) !important;
          text-decoration: none !important;
        }

        .search-container {
          margin-bottom: 2rem;
          position: relative;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--accent-muted);
          padding: 0.3rem 0;
        }
        
        .search-icon {
          margin-right: 0.5rem;
          color: var(--base-70);
        }

        .search-input-wrapper input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
          color: var(--base-100);
          font-family: var(--font-serif);
          font-style: italic;
        }

        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--base-00);
          border: 1px solid var(--accent-muted);
          z-index: 1001;
          max-height: 300px;
          overflow-y: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .search-result-item {
          padding: 0.6rem 1rem;
          cursor: pointer;
        }

        .search-result-item:hover {
          background: var(--base-10);
        }

        .result-title { 
          font-size: 0.9rem; 
        }

        .nav-links a {
          display: block;
          color: var(--accent);
          text-decoration: none;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .nav-category {
          margin-top: 1.5rem;
        }

        .category-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--base-70);
          margin-bottom: 0.5rem;
        }

        nav ul { list-style: none; padding-left: 0; }
        nav li { margin-bottom: 0.3rem; }
        
        nav li a { 
          color: var(--base-100); 
          font-size: 0.95rem;
          opacity: 0.8;
        }

        nav li a:hover { 
          opacity: 1;
          text-decoration: underline;
        }

        main { 
          flex: 1; 
          margin-left: 260px; 
          padding: 3rem 5%; 
          display: flex;
          justify-content: flex-start;
          min-height: 100vh;
          box-sizing: border-box;
        }

        article {
          width: 100%;
          max-width: 42rem;
        }

        .menu-toggle {
          display: none; 
          position: fixed; 
          top: 1rem; 
          right: 1rem; 
          z-index: 1100;
          background: var(--base-00); 
          border: 1px solid var(--accent-muted);
          cursor: pointer; 
          padding: 0.5rem;
          border-radius: 4px;
        }

        .scrim {
          display: none; 
          position: fixed; 
          top: 0; 
          left: 0; 
          width: 100vw; 
          height: 100vh;
          background: rgba(0, 0, 0, 0.1); 
          z-index: 99;
        }

        @media (max-width: 1000px) {
          nav { transform: translateX(-100%); }
          nav.open { transform: translateX(0); }
          .scrim { display: block; }
          main { margin-left: 0; padding: 5rem 1.5rem; }
          .menu-toggle { display: block; }
        }
      `}</style>

    </div>
  );
};

export default Layout;
