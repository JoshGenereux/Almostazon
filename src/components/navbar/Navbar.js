import React from "react";
import './navbar.css';
import {faUser, faCartShopping, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () =>{

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <h1>Almostazon</h1>
        <button>Home</button>
        <form className='search'>
          <input className='searchbar' type='text' placeholder='search...'/>
          <button className='search-btn'>Search{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</button>
        </form>
        <button>Account {<FontAwesomeIcon icon={faUser}/>}</button>
        <button>Cart {<FontAwesomeIcon icon={faCartShopping}/>}</button>
      </nav>
    </div>
  )
}

export default Navbar;