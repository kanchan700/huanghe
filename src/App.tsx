import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Gallery } from './projects/gallery/Gallery';
import { Blog } from './projects/blog/Blog';
import './App.css';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Huanghe</Link>
        <div className="nav-links">
          <Link 
            to="/gallery" 
            className={location.pathname === '/gallery' ? 'active' : ''}
          >
            画廊
          </Link>
          <Link 
            to="/blog" 
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            博客
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
