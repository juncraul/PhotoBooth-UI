import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import UploadFile from './pages/UploadFile';
import ViewGallery from './pages/ViewGallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/uploadFile' element={<UploadFile/>} />
        <Route path='/viewGallery' element={<ViewGallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
