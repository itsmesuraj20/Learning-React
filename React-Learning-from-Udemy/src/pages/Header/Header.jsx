import React from 'react'
import './Header.css'
function Header(){
  return (
    <>
    <div>
      <div className="nav-bar">
        <img src="https://placeholder.co/150" alt=" " height="50px" width="50px" />
        <nav>
          <ul>
            <li> <a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Header