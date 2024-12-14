import React from 'react'

function SignUp() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
   <>
   <form className="mySignUp" onSubmit={handleSubmit}>

        <center><h1 id="auth-form-heading" className="ud-heading-xxl auth-form-heading--auth-form-heading--BNXbz myHeadingSignUp">Sign up and start learning</h1></center>
        <div className="mb-3">
        <label htmlFor="FullName" className="form-label ">Full Name</label>
        <input type="text" className="form-control" id="FullName" placeholder="Full name"/>
        </div>
        <div className="mb-3">
        <label htmlFor="emailAddress" className="form-label">Email address</label>
        <input type="email" className="form-control" id="emailAddress" placeholder="Email"/>
        </div>
        <div className="mb-3">
        <label htmlFor="Password" className="form-label">Password</label>
        <input type="password" className="form-control" id="Password" placeholder="Password"/>
        </div>
        <center><button type="submit" className="btn btn-primary mybutton">Sign Up</button></center>
        </form>
            
   </>
  )
}

export default SignUp
