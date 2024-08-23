import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import{Route, Routes } from 'react-router-dom'
import Training from './components/Training';

function App() {
  return (
    <div className="App">
     < NavBar/>
    <Routes>
       <Route  path="/Home" element={<Home/>}/>
       <Route  path="/Training" element={<Training/>}/>

    </Routes>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
    </div>
  );
}

export default App;
