function PatientsPage() {
  return (
    <section className="patients-page">
      <div className="container">
        <h2>For Patients</h2>
        <p>Everything you need to manage your medical information.</p>

        <div className="patients-grid">
          <div className="patients-card">
            <h3>Your Profile</h3>
            <p>View medical records, prescriptions, and more.</p>
          </div>

          <div className="patients-card">
            <h3>Appointments</h3>
            <p>View and manage upcoming doctor appointments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientsPage;