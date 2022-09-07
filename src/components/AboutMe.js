import { Link } from "react-router-dom"
import React from "react"

function About() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered has-text-black">
            About Me
            Professional Photo (pink turtleneck)
            Expanded Brand Statement
            Mention GA enrollment grad SEI
            {/* Info about industry interests (online resources, podcasts, coding online courses, meetups, etc. GA, Ladies Who Code) */}
            <h2><a href="https://www.linkedin.com/in/roshanak11/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
            <h2><a href="https://github.com/roshanak11/" target="_blank" rel="noopener noreferrer">GitHub</a></h2>
            <h2><a href="https://instagram.com/rosh_adventures" target="_blank" rel="noopener noreferrer">Instagram</a></h2>
          </p>
          <p>Learn more about my
            <Link to="/Passions">
              <h3>Passions</h3>
            </Link>
            outside of work.</p>
        </div>
      </div>
    </section>
  )
}

export default About
