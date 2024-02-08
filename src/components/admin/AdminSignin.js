import React from 'react'
import "../../styles.css"
import {Link} from 'react-router-dom'

const AdminSignin = () => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
        <div>
        <h4 className='text-center'>Admin Panel</h4>
        <div className='p-5' style={{width: "500x", backgroundColor: "#ffffff"}}>
         <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <div className='d-flex align-items-center justify-content-center' >
                <Link to={"/admin-dashboard"}> <button style={{background: "#FFF700", borderRadius: "20px"}} type="submit" className="btn px-5">Sign in</button></Link>
            </div>
            </form>

        </div>
        <br />
        <div className='p-5' style={{width: "500x", backgroundColor: "#ffffff", border: "1px solid black", borderRadius: "20px"}}>
         <h6>Use the following credintials to login</h6>
         <br />
         <p>User ID</p>
         <p></p>
         <br />
         <p>Password</p>
         <p></p>

        </div>
        </div>
    </div>
    
  )
}

export default AdminSignin