import React from 'react'
import Logo from "../images/logo.svg"
export default function Navbar() {
  return (
    <div className='lg:p-10 p-8 lg:w-full w-48'>
    <img src={Logo} alt='logo' />
    </div>
  );
}
