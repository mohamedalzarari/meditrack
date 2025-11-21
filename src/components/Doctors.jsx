function Doctors() {
  return (
    <section className="for-doctors" id="docs">
      <div className="container">

        <div className="lead">
          <h2>For Doctors</h2>
          <p>
            Manage your practice efficiently with Meditrack's comprehensive tools
            designed for healthcare professionals.
          </p>
        </div>

        <div className="docards">
          <div className="doc-card">
            <h3>Today's view</h3>
            <p>See all upcoming patients</p>
          </div>

          <div className="doc-card">
            <h3>Quick actions</h3>
            <p>Issue prescriptions, request labs, and add notes quickly.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Doctors;