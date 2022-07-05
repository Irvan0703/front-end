import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/NavBar/index'
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home />}/>
      <Route exact path="/Login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
