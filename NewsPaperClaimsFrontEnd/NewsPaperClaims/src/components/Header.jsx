import React from 'react'
import IITBlogo from'../assets/logo.png';
import '../css/Header.css';

const Header = () => {
  return (
    <>
        <header className='header'>
            <a href='#' className=''><img className='logo' src={IITBlogo}  alt="CSS header" /></a>
            <h4 className='heading'>भारतीय प्रौद्योगिकी संस्थान मुंबई <br />Indian Institute of Technology Bombay</h4>
        </header>
    </>
  )
}

export default Header