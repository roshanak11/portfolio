import { Link } from "react-router-dom"
import React from "react"

function NatureExercisePhotography() {
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
            <br></br>
            <h2>Travel Photography:</h2>
          </p>

          <div className="columns is-multiline">
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662547241/Portfolio/passions/oceanside_sunset_sat_waax2i.jpg" alt="Santa Barbara Sunset"></img>
              </figure>
              <p className="is-italic">Santa Barbara</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662546463/Portfolio/passions/hike_bgrhx5.jpg" alt="Southern California"></img>
              </figure>
              <p className="is-italic">Southern California</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662546461/Portfolio/passions/nature_kjcwnr.jpg" alt="Southern California Moon and Mountains"></img>
              </figure>
              <p className="is-italic">Southern California</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556330/Portfolio/passions/moonrise_river_hike_waxo47.png" alt="United Kingdom Moon and Sea"></img>
              </figure>
              <p className="is-italic">United Kingdom</p>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556340/Portfolio/passions/fiery_sunset_cz8t8d.png" alt="Southern California Fiery Sunset"></img>
              </figure>
              <p className="is-italic">Southern California</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556333/Portfolio/passions/sunset_hike_mountain_zefawp.png" alt="Southern California Sunshine Rays"></img>
              </figure>
              <p className="is-italic">Southern California</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556351/Portfolio/passions/london_winter_fog_iloqaa.png" alt="United Kingdom Gloomy Winter"></img>
              </figure>
              <p className="is-italic">United Kingdom</p>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-4by3">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662563648/Portfolio/passions/IMG_3820_e7qurv.jpg" alt="Southern California Hike"></img>
              </figure>
              <p className="is-italic">Southern California</p>
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

export default NatureExercisePhotography

