import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Gallery } from './projects/gallery/Gallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
