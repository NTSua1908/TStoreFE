import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Gamedetail from "./pages/user/Gamedetail";

import Home from "./pages/user/Home";
import Discover from "./pages/user/Discover";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Address from "./pages/user/Address";
import NewAddress from "./pages/user/NewAddress";
import Admin from "./pages/admin/Admin";
import UserList from "./pages/admin/UserList";
import GameList from "./pages/admin/GameList";
import NewGame from "./pages/admin/NewGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Gamedetail />} />
        <Route path="/detail/:id" element={<Gamedetail />} />
        <Route path="*" element={<h1>Khong tim thay</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/user/address/edit" element={<NewAddress />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/products" element={<GameList />} />
        <Route path="/admin/products/newgame" element={<NewGame />} />
        <Route path="*" element={<h1>Khong tim thay</h1>} />
      </Routes>
    </div>
  );
}

export default App;
