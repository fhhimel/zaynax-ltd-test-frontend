import React, {useState} from 'react'
import "../styles.css"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate();
    const [user_id, setUser_id] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { user_id, password };

        try {
            await axios.post('http://localhost:5000/api/users', newUser);
            // fetchUsers(); // Fetch users after adding a new user
            navigate('/');
            console.log("Registered")
          } catch (error) {
            console.error('Error adding user:', error);
          }


    
        // if (id) {
        //   try {
        //     await axios.put(`/api/users/${id}`, newUser);
        //     navigate('/users');
        //   } catch (error) {
        //     console.error('Error updating user:', error);
        //   }
        // } else {
          
        // }
      };



  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className='p-5' style={{width: "500x", backgroundColor: "#ffffff"}}>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" value={user_id}
            onChange={(e) => setUser_id(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <div className='d-flex align-items-center justify-content-center' >
                 <button style={{background: "#FFF700", borderRadius: "20px"}} type="submit" className="btn px-5">Sign Up</button>
            </div>
            </form>

        </div>
      
    </div>
    
  )
}

export default Signup