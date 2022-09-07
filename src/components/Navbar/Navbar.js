import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const handleClick =(e)=>{
    const listItems = [...document.getElementsByTagName("li")];
    listItems.map(item => item.classList.remove("clicked"))
    e.target.classList.add("clicked")
  }
  return (
    <div className='navbar'>
        <ul id="list" onClick={handleClick}>
            <Link to="/"><li>Dashboard</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/inprogress"><li>In Progress</li></Link>
            <Link to="/settings"><li>Settings</li></Link>
        </ul>
    </div>
  )
}

export default Navbar