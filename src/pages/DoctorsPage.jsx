import Doctors from "../components/Doctors";

function DoctorsPage() {
  
  return (
    <section className="for-doctors" id= "docs">
      <div className="container">

        <div className="lead">
          <h2>For Doctors</h2>
          <p>manage your patients efficiently with meditrack tools</p>
        </div>

        <div className= "docards">
          <div className="doc-card">
            <h3>Todays view </h3>
            <p>snapshot of all upcoming appointments</p>
          </div>
          <div className="doc-card">
            <h3>Quick actions </h3>
            <p>issue prescriptions, request labs</p>
          </div>
          <div className="doc-card">
            <h3>patients notes</h3>
            <p>review recent summary, and update medical notes</p>
          </div>
        </div>

        <div className="doc-card nalytics-card " >
          <h3>overview</h3>
          <p>a quick overview for your daily insights:</p>
          <ul>
            <li>Upcoming appointments</li>
            <li>reminders sent Today</li>
            <li>Missed appointments</li>
          </ul>
        </div>

         <div>
          <a href="#" className="btn primary">Go to Dashboard</a>
          </div> 

      </div>
      </section>
      
  );

}

export default DoctorsPage;