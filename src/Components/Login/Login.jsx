import React from 'react'

function Login() {
  const handleLoginSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form  className='myLogin' onSubmit={handleLoginSubmit}>
      <center><h1 id="auth-form-heading" className="ud-heading-xxl auth-form-heading--auth-form-heading--BNXbz myHeadingLogin">Log in for your learning journey</h1></center>
      <div class="mb-3">
        <label for="EmailAddress" class="form-label">Email</label>
        <input type="text" class="form-control" id="EmailAddress" placeholder="Enter the Email Address"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">Password</label>
        <input type="password" className="form-control" id="Password" placeholder="Password"/>
        </div>
      <center><button type="submit" className="btn btn-primary mybutton">Sign Up</button></center>
      </form>
    </div>
  )
}

export default Login
