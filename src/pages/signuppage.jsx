function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
      <h2>Login to Meditrack</h2>
      <p className="auth-subtitle"> Access your clinic or patient dashboard.</p>

      <form className="auth-form">

        <label>Full Name</label>
        <input type="text" placeholder="full name"></input>

        <label>Email</label>
        <input type="Email" placeholder="you@example.com"/>

        <label> Password</label>
        <input type="Password" placeholder="Enter a Password" />
        
        <input type="Password" placeholder="Confirm your Password" />

        <button type="submit" className="auth-btn">Create account</button>
      </form>
      <p className="auth-switch">
        <a href="/login">Already have an account?</a> 
      
      </p>
    </div>
  </div>

    
  );
}

export default SignupPage;