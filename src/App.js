<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Gamedetail from './pages/Gamedetail';
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/user/Home";
import Game_detail from "./pages/user/Game_detail";
import Discover from "./pages/user/Discover";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Address from "./pages/user/Address";
import NewAddress from "./pages/user/NewAddress";
import Admin from "./pages/admin/Admin";
import UserList from "./pages/admin/UserList";
import GameList from "./pages/admin/GameList";
>>>>>>> 7717cc95ab2afc9ec49fd9c00f9bc9aada568d72

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route  path='/' element={<Home />}/>
        <Route  path='/detail' element={<Gamedetail />}/>
        <Route  path='*' element={<h1>Khong tim thay</h1>}/>
=======
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Game_detail />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/user/address/edit" element={<NewAddress />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/products" element={<GameList />} />
        <Route path="*" element={<h1>Khong tim thay</h1>} />
>>>>>>> 7717cc95ab2afc9ec49fd9c00f9bc9aada568d72
      </Routes>
    </div>
  );
}

export default App;
