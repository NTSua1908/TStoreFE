import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/input/Input";
import "./login.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";
import { useNavigate } from "react-router-dom";

import {
  authenticate,
  authFailure,
  authSuccess,
} from "../../redux/authActions";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState([false, false]);
  const [isCompleted, setCompleted] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  // const user = useSelector((state) => state.user);

  const submitRef = useRef();

  const dispath = useDispatch();

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
      AuthenticationService.userLogin({
        userName: email,
        password: password,
      })
        .then((response) => {
          console.log("response: ", response);
          if (response.status === 200) {
            dispath(authSuccess(response.data));
            console.log("Thanh cong!!!!", response);
            if (response.data.role === "admin") navigate("/admin");
            else if (response.data.role === "user") navigate("/");
            // props.history.push('/dashboard');
          } else {
            authFailure("Something Wrong!Please Try Again");
            console.log("fail");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err && err.response) {
            switch (err.response.status) {
              case 401:
                authFailure("Authentication Failed.Bad Credentials");
                break;
              default:
                authFailure("Something Wrong!Please Try Again");
            }
          } else {
            authFailure("Something Wrong!Please Try Again");
          }
        });
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={Logo} alt="" />
        <h1 className="login__title">Đăng nhập vào TStore</h1>
        <Input
          placeholder="Email"
          value={email}
          onChange={setEmail}
          required
          isEmail
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
