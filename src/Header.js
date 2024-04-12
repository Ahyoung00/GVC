// Header.js
import React from 'react';
import logo from './G.V.C Logo.png';

const Header = () => {
  return (
    <header className="signup-header">
      <div className="header-content">
        <img src={logo} alt="G.V.C Logo" className="logo" />
        <span className="site-name">GlobalVirtualConference.com</span>
      </div>
      <hr className="custom-hr" />
      <nav className="signup-nav">
        <span className="title">G.V.C</span>
        <a href="/mypage">마이페이지</a>
        <a href="/myconference">나의 회의</a>
      </nav>
      <hr className="custom-hr" />
    </header>
  );
};

export default Header;
