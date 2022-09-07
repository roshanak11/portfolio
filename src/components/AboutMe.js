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
            Info about industry interests (online resources, podcasts, coding online courses, meetups, etc. GA, Ladies Who Code)
            <h2><a href="https://www.linkedin.com/in/roshanak11/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
            <h2><a href="https://github.com/roshanak11/" target="_blank" rel="noopener noreferrer">GitHub</a></h2>
            <h2><a href="https://instagram.com/rosh_adventures" target="_blank" rel="noopener noreferrer">Instagram</a></h2>
            Interests:
            <Link to="/travel">
              <h2>Travel</h2>
            </Link>
            <Link to="/nature-and-exercise">
              <h2>Nature and Exercise</h2>
            </Link>
            Theater Arts: Acting (2nd grade-11th grade age 9-11. acting, lead actress, improv, script writing, puppet shows, backstage production)
            Psychology: Psi Chi Honors Society based on merit, passionate about mental health and the human mind, advocate for equality for all disabilities. Experience tutoring and teaching SpEd and ELL students in middle school and at college-level.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
