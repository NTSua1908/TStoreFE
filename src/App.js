import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Game_detail from './pages/Game_detail';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/detail' element={<Game_detail />}/>
        <Route  path='*' element={<h1>Khong tim thay</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
