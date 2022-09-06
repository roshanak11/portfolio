import { Link } from "react-router-dom"
import React from "react"


function Navbar() {

  return (
    <>
      <header>
        <nav className="navbar is-light">
          <div className="container">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <h2>Home</h2>
              </Link>
              <Link to="/about" className="navbar-item">
                <h2>About</h2>
              </Link>
              <Link to="/projects" className="navbar-item">
                <h2>Projects</h2>
              </Link>
              <Link to="/skills" className="navbar-item">
                <h2>Skills</h2>
              </Link>
              <Link to='/contact' className="button is-secondary">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
