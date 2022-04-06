import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className='header'>
            <div className='header-logo'>
                <img src='https://thumbs.dreamstime.com/b/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0-swoosh-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D0%BD%D0%B0-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D1%83%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-142645951.jpg' alt='logo img'></img>
            </div>
            <div className='header-search'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g transform="rotate(90 10 10)"><g fill="currentColor"><path fill-rule="evenodd" d="M4.475 4.475a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778Zm6.364 6.364a3.5 3.5 0 1 1-4.95-4.95a3.5 3.5 0 0 1 4.95 4.95Z" clip-rule="evenodd"/><path d="M11.192 13.314a1.5 1.5 0 1 1 2.122-2.122l3.535 3.536a1.5 1.5 0 1 1-2.121 2.121l-3.536-3.535Z"/></g></g></svg>
            <input type="text" placeholder="Search" />
            </div>
            <div className='header-login'>
                <button className='header-login-button'>Login</button>
            </div>
        </header>
    )
}

export default Header;