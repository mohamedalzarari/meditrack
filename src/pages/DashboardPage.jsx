import appointments from "../data/appointments"
function DashboardPage(){
    return(
<div className="dashboard">
  <h2 className="dash-title">Dashboard</h2>
  <p className="dash-sub">Overview for today</p>

  {/* 2 columns wrapper */}
  <div className="dash-columns">

    {/* LEFT: appointments */}
    <div className="appointments-column">
      <h3>Today's Appointments</h3>

      <div className="appointments-list">
        {appointments.map((appt) => (
          <div className="appt-card" key={appt.id}>
            <div className="appt-info">
              <strong>{appt.patientName}</strong>
              <p>{appt.time}</p>
              <p className="appt-reason">{appt.reason}</p>
            </div>

            <div className="appt-status">
              <span className={`status ${appt.status.toLowerCase()}`}>
                {appt.status}
              </span>

              <div className="actions">
                <button className="view-btn">View</button>
                {appt.status === "Upcoming" && (
                  <button className="cancel-btn">Cancel</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: quick actions */}
    <div className="actions-column">
      <h3>Quick actions</h3>
      <button className="action-btn">Add Appointment</button>
      <button className="action-btn">Issue prescription</button>
      <button className="action-btn">Request lab</button>
      <button className="action-btn">Add medical note</button>
    </div>

  </div>

  {/* STATS under both columns */}
  <div className="dash-stats">
    <div className="stat-card">
      <h4>{appointments.length}</h4>
      <p>Total Appointments</p>
    </div>

    <div className="stat-card">
      <h4>{appointments.filter(a => a.status === "Completed").length}</h4>
      <p>Completed</p>
    </div>

    <div className="stat-card">
      <h4>{appointments.filter(a => a.status === "Cancelled").length}</h4>
      <p>Cancelled</p>
    </div>
  </div>
</div>
    );
}
export default DashboardPage;