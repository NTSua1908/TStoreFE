import React, { useState, useEffect, useRef } from "react";
import "./signup.scss";
import Input from "../../components/input/Input";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function SignUp(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [policy, setPolicy] = useState(false);

  const [filled, setFilled] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isCompleted, setCompleted] = useState(false);

  const submitRef = useRef();
  const confirmEmailRef = useRef();

  useEffect(() => {
    if (filled.indexOf(false) != -1 || !policy) {
      submitRef.current.classList.add("invalid");
      setCompleted(false);
    } else {
      submitRef.current.classList.remove("invalid");
      setCompleted(true);
    }
    // filled &&
    // console.log(
    //   "change",
    //   filled,
    //   filled.indexOf(false),
    //   policy,
    //   filled.indexOf(false) != -1 || !policy
    // );
  }, [filled, policy]);

  useEffect(() => {
    filled[1]
      ? confirmEmailRef.current.classList.remove("invalid")
      : confirmEmailRef.current.classList.add("invalid");
  }, [filled[1]]);

  const handleSignUp = () => {
    if (isCompleted) {
      console.log("Register");
      //do something
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <img className="signup__logo" src={Logo} alt="" />
        <h1 className="signup__title">Đăng kí tài khoản TStore</h1>
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
          placeholder="Email"
          value={email}
          onChange={setEmail}
          required
          isEmail
          filled={filled}
          setFilled={setFilled}
          index={1}
        />
        <div className="signup__confirm-email">
          <Input
            placeholder="Mã xác nhận email"
            value={confirmEmail}
            onChange={setConfirmEmail}
            required
            isNumber
            filled={filled}
            setFilled={setFilled}
            index={2}
          />
          <button className="signup__submit" ref={confirmEmailRef}>
            Gửi mã xác nhận
          </button>
        </div>
        <Input
          placeholder="Số điện thoại"
          value={phone}
          onChange={setPhone}
          required
          isPhone
          filled={filled}
          setFilled={setFilled}
          index={3}
        />
        <Input
          placeholder="Mật khẩu"
          value={password}
          onChange={setPassword}
          required
          isPassword
          filled={filled}
          setFilled={setFilled}
          index={4}
          compareValue={rePassword}
        />
        <Input
          placeholder="Mật khẩu"
          value={rePassword}
          onChange={setRePassword}
          required
          isConfirmPassword
          filled={filled}
          setFilled={setFilled}
          index={5}
          compareValue={password}
        />
        <div className="signup__policy">
          <input
            type="checkbox"
            id="policy"
            onChange={(e) => {
              setPolicy(e.target.checked);
            }}
          />
          <label htmlFor="policy">
            Tôi đã đọc và đồng ý với{" "}
            <Link to="/policy">điều khoản dịch vụ</Link>
          </label>
        </div>
        <button
          className="signup__submit"
          onClick={handleSignUp}
          ref={submitRef}
        >
          Đăng ký
        </button>
        <div className="signup__signin">
          Bạn đã có tài khoản TStore?
          <Link to="/login"> Đăng ký</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
