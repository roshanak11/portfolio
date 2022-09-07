function Contact() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-half">
              <figure className="image is-1by1">
                <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662566665/Portfolio/passions/oceanside_laptop_study2.jpg_zq1tyj_6ad9ad_11e552.jpg" alt="Laptop work"></img>
              </figure>
            </div>
            <div className="column is-one-half">
              <p className="title is-2 has-text-centered has-text-black">
                Contact Me
                <br></br>
                {/* Links */}
                <br></br>
                <h2><a href="mailto:roshanak.ahmed11@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></h2>
                <br></br>
                <h2><a href="https://www.linkedin.com/in/roshanak11/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
                <br></br>
                <h2><a href="https://github.com/roshanak11/" target="_blank" rel="noopener noreferrer">GitHub</a></h2>
                <br></br>
                <h2><a href="https://instagram.com/rosh_adventures" target="_blank" rel="noopener noreferrer">Instagram</a></h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
