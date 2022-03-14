import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header isLogin/>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='*' element={<h1>Khong tim thay</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
