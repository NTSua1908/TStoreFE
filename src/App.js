<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/user/Home";
import Gamedetail from "./pages/user/Gamedetail";
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Gamedetail from "./pages/user/Gamedetail";

import Home from "./pages/user/Home";
>>>>>>> 198f1ba16aa5bfa3acf48c6d0cf3888be76a7416
import Discover from "./pages/user/Discover";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Address from "./pages/user/Address";
import NewAddress from "./pages/user/NewAddress";
import Admin from "./pages/admin/Admin";
import UserList from "./pages/admin/UserList";
import GameList from "./pages/admin/GameList";
<<<<<<< HEAD
import UserInfor from "./pages/user/UserInfor";
import Payment from "./pages/user/Payment";
import Cart from "./pages/user/Cart";
import OrderSuccess from "./pages/user/OrderSuccess";
=======
import NewGame from "./pages/admin/NewGame";
>>>>>>> 198f1ba16aa5bfa3acf48c6d0cf3888be76a7416

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Gamedetail />} />
<<<<<<< HEAD
=======
        <Route path="*" element={<h1>Khong tim thay</h1>} />
        <Route path="/" element={<Home />} />
>>>>>>> 198f1ba16aa5bfa3acf48c6d0cf3888be76a7416
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/user/address/edit" element={<NewAddress />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/products" element={<GameList />} />
<<<<<<< HEAD
        <Route path="/user/information" element={<UserInfor />} />
        <Route path="/user/payment" element={<Payment />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/ordersuccess" element={<OrderSuccess />} />
=======
        <Route path="/admin/products/newgame" element={<NewGame />} />
        <Route path="*" element={<h1>Khong tim thay</h1>} />
>>>>>>> 198f1ba16aa5bfa3acf48c6d0cf3888be76a7416
      </Routes>
    </div>
  );
}

export default App;
