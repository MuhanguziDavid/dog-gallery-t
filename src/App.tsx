import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
