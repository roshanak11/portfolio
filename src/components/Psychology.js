import { Link } from "react-router-dom"
import React from "react"

function Psychology() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">

        <div className="container">
          <p className="title is-2 has-text-centered has-text-black">
            Psychology
          </p>

          <p>
            <h2>
              ✮ I am passionate about the human mind.
              <br></br>
              ✮ I am a mental health advocate.
              <br></br>
              ✮ I advocate for equality and all disabilities.
              <br></br>
              ✮ In my work, I have experience tutoring and teaching special education students at both a middle school and college-level.
              <br></br>
              ✮ I have a Bachelor of Arts in Psychology from the University of California, Santa Barbara.
              <br></br>
              ✮ I was accepted into Psi Chi: The International Honor Society in Psychology at the the University of California, Santa Barbara.
            </h2>
          </p>
          <br></br>


          {/* Back Button */}
          <Link to="/passions">
            <h2 className="has-text-right">←Back</h2>
          </Link>

        </div>
      </div>
    </section >
  )
}

export default Psychology
