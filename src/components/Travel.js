import { Link } from "react-router-dom"
import React from "react"

function Travel() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">

        <div className="container">
          <p className="title is-2 has-text-centered has-text-black">
            Travel
          </p>
          <div className="columns is-multiline">
            <div className="column is-one-quarter">
              <figure className="image is-4by5">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556331/Portfolio/passions/me_maldives_qdvyhj.png" alt="Maldives palm tree portrait"></img>
              </figure>
              <p className="is-italic">Portrait in Maldives</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by5">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556343/Portfolio/passions/london_christmas_decoration_psz6hr.png" alt="Christmas in Central London"></img>
              </figure>
              <p className="is-italic">Christmas in Central London</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by5">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662546460/Portfolio/passions/sunrise_ze11wa.jpg" alt="Sunrise in Santa Barbara"></img>
              </figure>
              <p className="is-italic">Sunrise in Santa Barbara</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by5">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662564276/Portfolio/passions/veniceitaly.jpg" alt="Gondola in Venice, Italy"></img>
              </figure>
              <p className="is-italic">Gondola in Venice, Italy</p>
            </div>
            <p>
              <br></br>
              I have lived in 3 continents (North America, Europe, and Asia) and have traveled to the following 15 countries so far:
              <h2>
                <h4>Europe:</h4> England, Italy, France
                <br></br>
                <h4>Asia:</h4> Maldives, Singapore, Thailand, Hong Kong, India, Bangladesh, Malaysia, China, Qatar, UAE
                <br></br>
                <h4>North America:</h4> USA, Mexico
                <br></br>
              </h2>
              I plan to travel to as many countries as possible within my lifetime. I enjoy learning about new cultures, meeting people from different backgrounds, and trying dishes from all over the world. I also love learning and practicing different languages. I am bilingual in English and Bengali. I learned how to read and write Bengali at a beginner level from the ages of 12-16. I also studied French for 8 years at a beginner level and received a 6/7 score on the International Baccalaureate French B Standard Level exam. In my spare time, I use Duolingo to refresh my knowledge in French.
              During my childhood, I was also exposed to Hindi and Urdu, and I took one Spanish class in college. My goal is to continue to sharpen and expand my language skills.          </p>
            {/* Back Button */}
            <Link to="/passions">
              <h2 className="has-text-right">←Back</h2>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Travel
