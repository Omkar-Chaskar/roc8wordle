import React from 'react';
import "../style/header.css";

function Header() {
  return (
    <div className='header'>
        <div className='header title'>
            <h1>WORDEL</h1>
        </div>
        <div className='header toggle'>
            <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
            </label>
        </div>
    </div>
  )
}

export default Header;