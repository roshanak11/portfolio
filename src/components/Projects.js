import { Link } from "react-router-dom"
import React from "react"
// import ProjectOne from "./Project1"
// import ProjectTwo from "./Project2"
// import ProjectThree from "./Project3"
// import ProjectFour from "./Project4"

function Projects() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered has-text-black">
            Projects
            for each add condensed README with links to github readme and deployed project
            <Link to="/project-one">
              <h2>Project One</h2>
            </Link>
            <Link to="/project-two">
              <h2>Project Two</h2>
            </Link>
            <Link to="/project-three">
              <h2>Project Three</h2>
            </Link>
            <Link to="/project-four">
              <h2>Project Four</h2>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
