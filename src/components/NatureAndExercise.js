import { Link } from "react-router-dom"
import React from "react"

function NatureAndExercise() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">

        <div className="container">
          <p className="title is-2 has-text-centered has-text-black">
            Nature, Exercise, Photography
          </p>
          <p>
            <br></br>
            I enjoy spending time in nature because it allows me to simultaneously connect with Mother Earth, exercise, stay healthy, and capture many sunrises and sunsets with my camera. I enjoy living a healthy lifestyle in my spare time.
            <h2>
              <h4>Travel Photography:</h4> Caption
            </h2>
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


            {/* Back Button */}
            <Link to="/passions">
              <h2 className="has-text-right">←Back</h2>
            </Link>

          </div>
        </div>
      </div >
    </section >
  )
}

export default NatureAndExercise

// function NatureAndExercise() {
//   return (
//     <section className="hero is-fullheight-with-navbar is-warning">
//       <div className="hero-body">
//         <div className="container">
//           <p className="title is-1 has-text-centered has-text-black">
//          Exercise, Nature, Sunrises, Sunsets, Fresh Air
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default NatureAndExercise


// <div className="cart-content">
// <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662547241/Portfolio/passions/oceanside_sunset_sat_waax2i.jpg" alt="Roshanak's Sunset Photography in Santa Barbara" height="400" width="400"></img>
// </div>