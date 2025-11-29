function HelpPage() {
  return (
    <section className="help-page">

      
      <div className="help-hero container">
        <h2>How can we help you?</h2>
        <p>Find quick answers to the most common Meditrack questions.</p>
      </div>

      
      <div className="help-grid container">

        <div className="help-card">
          <h3>Account & Login</h3>
          <p>Troubleshooting sign in, password reset, and profile settings.</p>
        </div>

        <div className="help-card">
          <h3>Appointments</h3>
          <p>Booking, rescheduling, and viewing appointment history.</p>
        </div>

        <div className="help-card">
          <h3>Reminders</h3>
          <p>Understanding appointment and medication reminders.</p>
        </div>

        <div className="help-card">
          <h3>Medical Records</h3>
          <p>Accessing prescriptions, medical notes, or lab requests.</p>
        </div>

        <div className="help-card">
          <h3>For Doctors</h3>
          <p>Managing patients, notes, and daily insights.</p>
        </div>

        <div className="help-card">
          <h3>Contact Support</h3>
          <p>Reach our team for any unresolved issues or questions.</p>
        </div>

      </div>

      
      <div className="help-cta container">
        <p>Didn’t find what you’re looking for?</p>
        <a href="#" className="contact-btn">Contact Support</a>
      </div>

    </section>
  );
}

export default HelpPage;