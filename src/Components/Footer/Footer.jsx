import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
     <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      </Link>
      <p className="text-body-secondary">© 2024</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text-body-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text-body-secondary">About</Link></li>
        <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        <li className="nav-item mb-2"><Link to="/Github" className="nav-link p-0 text-body-secondary">Github</Link></li>
       
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text-body-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text-body-secondary">About</Link></li>
        <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        <li className="nav-item mb-2"><Link to="/Github" className="nav-link p-0 text-body-secondary">Github</Link></li>
        
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text-body-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text-body-secondary">About</Link></li>
        <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        <li className="nav-item mb-2"><Link to="/Github" className="nav-link p-0 text-body-secondary">Github</Link></li>
        
      </ul>
    </div>
  </footer>
</div>
    </div>

  )
}

export default Footer
