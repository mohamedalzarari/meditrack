import appointments from "../data/appointments"
function DashboardPage(){
    return(
<div className="dashboard">
    <h2>Appointments</h2>
    <p>Today's schedule</p>

    <div className="appointments-list">

        {appointments.map((appt)=>(
            <div className="appointment-card" key={appt.id}>

                <div className="appointments-top">
                <strong>{appt.patientName}</strong>
                <span className="time">{appt.time}</span>
                </div>
            
                
                <p>{appt.reason}</p>
            <span className={`status ${appt.status.toLowerCase()}`}>{appt.status}</span>

        <div className="actions">
        <button className="view-btn">View</button>
        {appt.status === "Upcoming" && ( <button className="cancel-btn">Cancel</button>)}
    </div>
  </div>
        ))}
        </div>
    </div>
    );
}
export default DashboardPage;