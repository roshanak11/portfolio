import { Link } from "react-router-dom"
import React from "react"

function Passions() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-2 has-text-centered has-text-black">
            Passions
            {/* <h2><a href="https://instagram.com/rosh_adventures" target="_blank" rel="noopener noreferrer">Instagram</a></h2> */}
            <Link to="/travel">
              <h2>Travel✈️🌎</h2>
            </Link>
            <Link to="/nature-and-exercise">
              <h2>Nature, Exercise, and Photography🧘‍♀️🏔🌙💫📷🍃</h2>
            </Link>
            <Link to="/theater-arts">
              <h2>Theater Arts🎭</h2>
            </Link>
            <Link to="/psychology">
              <h2>Psychology🧠</h2>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Passions
