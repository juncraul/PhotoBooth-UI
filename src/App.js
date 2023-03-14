import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages';
import About from './pages/about';
import UploadFile from './pages/uploadFile';
import GetList from './pages/getlist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/uploadFile' element={<UploadFile/>} />
        <Route path='/getList' element={<GetList/>} />
      </Routes>
    </Router>
  );
}

export default App;
