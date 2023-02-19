import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages';
import About from './pages/about';
import AnnualReport from './pages/annual';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/annual' element={<AnnualReport/>} />
      </Routes>
    </Router>
  );
}

export default App;
