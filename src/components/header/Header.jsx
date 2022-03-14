import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import logoPNG from '../../assets/logo.png';
import './header.scss';
import { Link, useLocation } from 'react-router-dom';
import Button from '../button/Button';

const headerNav = [
  {
      display: 'Cửa hàng',
      path: '/',
      //icon: 'storefront-outline'
  },
  {
      display: 'Khám phá',
      path: '/discover',
      //icon: 'bulb-outline'
  },
  {
      display: 'Hỗ trợ',
      path: '/support',
      //icon: 'help-circle-outline'
  }
];

function Header(props) {
  
  const {pathname} = useLocation();

  const active = headerNav.findIndex(item => item.path === pathname)


  const headerRef = useRef()
  const timer = useRef(null)

  useEffect(() => {
    const shrink = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            headerRef.current.classList.add('header__shrink');
        } else {
            headerRef.current.classList.remove('header__shrink');
        }
    }
    window.addEventListener('scroll', shrink);
    return () => {
        window.removeEventListener('scroll', shrink);
    };
  }, []);

  const handleAnimation = () => {
    clearTimeout(timer.current)
    headerRef.current.classList.remove("loading")
    headerRef.current.classList.add("loading")

    timer.current = setTimeout(()=> {
      console.log("timeout")
      headerRef.current.classList.remove("loading")
    }, 1000)
  }

  return (
    <div className='header' ref={headerRef}>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logoPNG} alt="" />
          <Link to='/' onClick={handleAnimation}>
            <span>TStore</span>
          </Link>
        </div>
        <div className="header__container">
          <ul className="header__nav">
            {headerNav.map((item, index) => 
              <li key={index} >
                <Link onClick={handleAnimation} to={item.path} className={`${index === active ? 'active' : ''}`}>
                  {item.display}
                </Link>
              </li>
            )}
          </ul>
          {
            props.isLogin ?
            <div className="header__user">
              <Button className="btn" ><Link to='/login'>Đăng nhập</Link></Button>
              <Button className='btn btn-login'><Link to='/register'>Đăng ký</Link></Button>
            </div>
            :
            <ul className="header__user">
              <span className='username'>Nguyen Thien Sua</span>
              <div className="avatar__container">
                <img src={logo} alt="" />
              </div>
            </ul>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;