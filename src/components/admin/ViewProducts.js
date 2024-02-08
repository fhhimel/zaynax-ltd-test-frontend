import React from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'


const ViewProducts = () => {
    var data = ["1", "2", "3"];

  return (
    <div>
        <Layout/>
        <div style={{margin: "30px 250px"}}>
              <Link to={"#"}> <button style={{background: "#FFFFFF", borderRadius: "20px"}} type="submit" className="btn px-5">Add New Product</button></Link>
                <br />
                <br />
                
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
    </div>
  )
}

export default ViewProducts