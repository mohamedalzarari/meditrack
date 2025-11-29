function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="login-card">
      <h2>Login to Meditrack</h2>
      <p className="login-subtitle"> Access your clinic or patient dashboard.</p>

      <form className="login-form">
        <label>Email</label>
        <input type="Email" placeholder="you@example.com"/>
        <label Password></label>
        <input type="Password" placeholder="Enter a Password" />
        <button className="btn login-btn">Login</button>
      </form>
      <div className="login-links">
        <a href="/forgot password">Forgot password?</a>
        <a href="/signup">Don't have an account? Sign up</a>
      </div>

    </div>
  </div>

    
  );
}

export default LoginPage;