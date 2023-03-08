import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import DogsPage from './pages/dogs/Dogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<DogsPage />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
