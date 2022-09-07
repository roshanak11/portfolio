import { Link } from "react-router-dom"
import React from "react"


function Navbar() {

  return (
    <>
      <header>
        <nav className="navbar-background">
          <div className="container">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <h4>Home</h4>
              </Link>
              <Link to="/about" className="navbar-item">
                <h4>About</h4>
              </Link>
              <Link to="/projects" className="navbar-item">
                <h4>Projects</h4>
              </Link>
              <Link to="/skills" className="navbar-item">
                <h4>Skills</h4>
              </Link>
              <Link to='/contact' className="navbar-item">
                <h4>Contact</h4>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
