import React from "react";
import './navbar.css';

const Navbar = () =>{

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <button>Home</button>
        <form className='search'>
          <input className='searchbar' type='text' placeholder='search...'/>
          <button className='search-btn'>Search</button>
        </form>
        <button>Account</button>
        <button>Cart</button>
      </nav>
    </div>
  )
}

export default Navbar;