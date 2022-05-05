import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Gamedetail from './pages/Gamedetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/detail' element={<Gamedetail />}/>
        <Route  path='*' element={<h1>Khong tim thay</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
