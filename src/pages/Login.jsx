import React, { useEffect, useRef, useState } from "react";
import Input from "../components/input/Input";
import "./login.scss";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState([false, false]);
  const [isCompleted, setCompleted] = useState(false);

  const submitRef = useRef();

  useEffect(() => {
    if (filled.indexOf(false) != -1) {
      submitRef.current.classList.add("invalid");
      setCompleted(false);
    } else {
      submitRef.current.classList.remove("invalid");
      setCompleted(true);
    }
    // filled &&
    // console.log("change", filled, filled.indexOf(false));
  }, [filled]);

  const handleLogin = () => {
    if (isCompleted) {
      console.log("Login");
      //do something
    }
  };

  // const usernameRef = useRef();
  // const passwordRef = useRef();

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={Logo} alt="" />
        <h1 className="login__title">Đăng nhập vào TStore</h1>
        <Input
          placeholder="Tên đăng nhập"
          value={userName}
          onChange={setUserName}
          required
          filled={filled}
          setFilled={setFilled}
          index={0}
        />
        <Input
          placeholder="Mật khẩu"
          value={password}
          onChange={setPassword}
          required
          isPassword
          filled={filled}
          setFilled={setFilled}
          index={1}
        />
        <div className="login__remember">
          <div className="login__remember-me">
            <input type="checkbox" id="rememberme" />

            <label htmlFor="rememberme">Remember me</label>
          </div>
          <div className="login__remember-forgot">
            <Link to="/forgot-password">Quên mật khẩu</Link>
          </div>
        </div>
        <button className="login__submit" onClick={handleLogin} ref={submitRef}>
          Đăng nhập
        </button>
        <div className="login__policy">
          <Link to="/policy">Chính sách bảo mật</Link>
        </div>
        <div className="login__signup">
          Bạn chưa có tài khoản TStore?
          <Link to="/signup"> Đăng ký</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
