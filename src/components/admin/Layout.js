import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles.css'

const Layout = () => {
  return (
    <>
          <nav style={{backgroundColor: "#FFFFFF", border: "1px solid black"}} className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Logo</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    </div>
                    <a href="" style={{textDecoration: "none", color: "black"}}>
                    User Name
                    
                    
                    </a>
                    <span style={{width: "50px"}}></span>
                
                    
            </div>
            </nav>

            <div className="sidebar">
            <ul>
                <Link style={{textDecoration: "none"}} to={"/"}><li>Promotion</li></Link>
                <Link style={{textDecoration: "none"}} to={"/"}><li>Orders</li></Link>
                <Link style={{textDecoration: "none"}} to={"/view-products"}><li>Products</li></Link>
             
            </ul>
            </div>
    </>
  )
}

export default Layout