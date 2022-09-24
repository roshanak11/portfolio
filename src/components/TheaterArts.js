import { Link } from "react-router-dom"
import React from "react"

function TheaterArts() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">

        <div className="columns is-multiline">
          <div className="column is-half">
            <figure className="image is-3by4">
              <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1664021099/Portfolio/passions/IMG_3117_2_cuufsi.jpg" alt="Monologue in The Birds"></img>
            </figure>
            <p className="is-italic">My monologue in The Birds</p>
          </div>

          <div className="column has-text-left">
            <p className="title is-2 has-text-centered has-text-black">
              Theater Arts
            </p>
            <p>
              ✮ I was actively involved in school plays from ages 9-17.
              <br></br>
              ✮ I took on several lead roles as the lead actress.
              <br></br>
              ✮ I dabbled with various theater skills such as improv, script writing, puppet shows, and backstage production.
              <br></br>
              ✮ I have enjoyed attending plays on the West End of London (e.g, Mamma Mia, Les Misérables, and Thriller) and the Shakespearean Globe (Macbeth).
              <br></br>
              ✮ I wish to remain involved in the world of theater arts.
            </p>

            {/* Back Button */}
            <Link to="/passions">
              <h2 className="has-text-right">←Back</h2>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}

export default TheaterArts
