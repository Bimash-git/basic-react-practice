import React from 'react'

export default function Navbar() {
    return (
      <>
        <nav>
          <img src={require("./image/react-logo.png")} alt="react-logo" className='nav-icon' />
          <h2 className='nav-logo-text'>React Facts</h2>
          <h3 className='nav-title'>React-Course Project1</h3>
        </nav>
      </>
    );
}