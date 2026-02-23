import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Note from './pages/Note';
import GraphView from './pages/GraphView';
import './lib/tufte.css';
import 'katex/dist/katex.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes/*" element={<Note />} />
          <Route path="graph" element={<GraphView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
