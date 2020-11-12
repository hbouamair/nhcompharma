import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/partic.png'



class UserProfile extends Component {
  
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-image">

                </div>
                <div className="card-body">
                  <div className="author">
                    <Link to='/'>
                      <img className="avatar border-gray"  src={img1} alt="..." />
                      <h5 className="title">Hatim ELammarti</h5>
                    </Link>
                    <p className="description">
                      Administrator 
                    </p>
                    <p className="description">
                    Phone Number : +212655581600 
                  </p>
                  <p className="description">
                 Email : hatim.nhcom@gmail.com
                </p>


                  </div>
                  
                </div>
                <hr />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile