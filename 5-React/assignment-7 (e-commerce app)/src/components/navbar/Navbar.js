import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 mb-5 shadow-sm">
  <div className="container">
    <a className="navbar-brand" href="#">E-Commerce Store</a> 
        <div className="d-flex">
          <Link className='btn bg-dark text-white' to={"/"}>Home</Link>
        </div>
  </div>
</nav>
    </>
  )
}

export default Navbar