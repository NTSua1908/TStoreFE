import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/user/Home";
import Gamedetail from "./pages/user/Gamedetail";
import Discover from "./pages/user/Discover";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Address from "./pages/user/Address";
import NewAddress from "./pages/user/NewAddress";
import Admin from "./pages/admin/Admin";
import UserList from "./pages/admin/UserList";
import GameList from "./pages/admin/GameList";
import UserInfor from "./pages/user/UserInfor";
import Payment from "./pages/user/Payment";
import Cart from "./pages/user/Cart";
import OrderSuccess from "./pages/user/OrderSuccess";
import NewGame from "./pages/admin/NewGame";
import Collection from "./pages/user/Collection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/user/address/edit" element={<NewAddress />} />
        <Route path="/user/detail" element={<Gamedetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/products" element={<GameList />} />
        <Route path="/user/information" element={<UserInfor />} />
        <Route path="/user/payment" element={<Payment />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/ordersuccess" element={<OrderSuccess />} />
        <Route path="/user/collections" element={<Collection />} />
        <Route path="/admin/products/newgame" element={<NewGame />} />
        <Route path="*" element={<h1>Khong tim thay</h1>} />
      </Routes>
    </div>
  );
}

export default App;
