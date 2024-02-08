import React from 'react'

import { CiShoppingCart, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
            <nav style={{backgroundColor: "#FFFFFF"}} className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <span style={{width: "300px"}}></span>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <span style={{width: "100px"}}></span> */}
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                    <a href="" style={{textDecoration: "none", color: "black"}}>
                    <CiShoppingCart size={30} />
                    Cart
                    
                    
                    </a>
                    <span style={{width: "50px"}}></span>
                    <CiUser size={30} />
                
                    
            </div>
            </nav>


    </>
  )
}

export default Navbar