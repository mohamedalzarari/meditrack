function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">

        <div id="hero-left">
          <p className="tag">Your clinic, Organized.</p>
          <h1>
            Streamline appointments and <br/> patient care with Meditrack.
          </h1>
          <p>Your health, our priority. Track your medical history with ease.</p>

          <div id="hero-buttons">
            <a href="/login" className="btn primary">Get started</a>
            <a href="#See features" className="btn secondary">See features</a>
          </div>
        </div>

        <div id="hero-right">
          <div className="appointment-card" role="note">
            <div className="appointment-illus"></div>

            <div className="appointment-info">
              <strong className="appointment-title">Next Appointment</strong>

              <div className="appointment-meta">
                Today · 3:30 PM · Alzarari
              </div>

              <span className="appointment-badge">
                Auto-reminder sent
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;