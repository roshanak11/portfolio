function About() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">

        <div className="card">
          <div className="card-image">
            <p className="title is-3 has-text-centered has-text-black">
              <img src="https://res.cloudinary.com/dgicm5dgb/image/upload/v1662556657/Portfolio/passions/me_qizumz_17067d.png" alt="Portrait" width="150" height="300"></img>
              About Me
            </p>
            <h3>
              My passion for learning, desire to be mentored, growth-mindset, and ability to receive feedback will make me a valuable asset to your industry. I have always been passionate about technology from a young age. I first taught myself how to code when I was 10 years old and won technology awards in school for having the highest score on various projects 5 years in a row. I love using code to construct projects that provide real solutions to real world problems. This is why I enrolled in General Assembly&apos;s Software Engineering Immersive course in London in 2022. In addition, I have a global mindset. I have lived in 3 continents and speak several languages. I am open-minded and I get along with people of all demographics and backgrounds. I would like to join a team that values my skill set and provides a good work-life balance.
            </h3>
          </div>

          <div className="card">
            <footer className="card-footer">
              <a href="https://www.linkedin.com/in/roshanak11/" className="card-footer-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/roshanak11/" className="card-footer-item" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://instagram.com/rosh_adventures" className="card-footer-item" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="/passions" className="card-footer-item" target="_blank" rel="noopener noreferrer">Passions</a>
            </footer>
          </div>

          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default About
