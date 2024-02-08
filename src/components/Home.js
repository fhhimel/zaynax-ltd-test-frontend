import React from 'react'
import Navbar from './Navbar'

import '../styles.css'



const Home = () => {

   var data = ["1", "2", "3"];

  return (
    <>
        <Navbar/>
            <div className="container-fluid p-5">
                <div className="row">
                            {data.map((item, index) => (
                                <div className="col-md-2 card product_card m-2" >
                                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Headphone</h5>
                                            <br />
                                            <div className="d-flex justify-content-between">
                                                    <p className="card-text product_price">BDT 4500</p>
                                                    <p className="card-text product_discount">15%</p>
                                            </div>
                                        </div>
                            </div>
                    ))}
                            
                          
                    
                </div>
            </div>
    </>
  )
}

export default Home